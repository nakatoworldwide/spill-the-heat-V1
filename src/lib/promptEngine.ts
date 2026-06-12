import type { Prompt } from "@/data/prompts";

export type PromptQueueOptions = {
  category: string;
  useIntensityProgression?: boolean;
  excludeIds?: Set<string>;
};

function shufflePrompts(promptList: Prompt[]) {
  const arr = [...promptList];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getAllowedIntensities(roundIndex: number, category?: string) {
  const questionNumber = roundIndex + 1;
  const isHighIntensityCategory = category === "spicy" || category === "unhinged";

  if (questionNumber <= 2) return isHighIntensityCategory ? [2] : [1];
  if (questionNumber <= 4) return [2];
  if (questionNumber <= 6) return [3];
  if (questionNumber === 7) return [1, 2];
  if (questionNumber >= 8) {
    if (questionNumber % 3 === 0) return [1, 2, 3];
    return [3];
  }
  return [1];
}

const SEX_DATING_KEYWORDS = [
  "sex", "sexual", "dating", "date", "hookup", "hook up",
  "attracted", "attraction", "crush", "romantic", "intimacy",
  "intimate", "relationship", "partner", "boyfriend", "girlfriend",
  "one night", "slept with", "sleep with"
];

function isSexOrDatingPrompt(prompt: Prompt): boolean {
  const text = prompt.mainPrompt.toLowerCase();
  return SEX_DATING_KEYWORDS.some((keyword) => text.includes(keyword));
}

function pullPrompt(
  availablePrompts: Prompt[],
  allowedIntensities: number[],
  recentPrompts: Prompt[]
) {
  const hasRecentGroupCallout = recentPrompts.some(
    (prompt) => prompt.openingStyle === "group-callout"
  );
  const recentHasSexOrDating = recentPrompts.some(isSexOrDatingPrompt);

  const intensityMatches = availablePrompts.filter((prompt) =>
    allowedIntensities.includes(Number(prompt.entryIntensity))
  );

  const safeIntensityMatches = intensityMatches.filter((prompt) => {
    if (prompt.openingStyle === "group-callout" && hasRecentGroupCallout) return false;
    if (recentHasSexOrDating && isSexOrDatingPrompt(prompt)) return false;
    return true;
  });

  if (safeIntensityMatches.length > 0) return shufflePrompts(safeIntensityMatches)[0];

  const groupCalloutSafe = intensityMatches.filter((prompt) => {
    if (prompt.openingStyle === "group-callout" && hasRecentGroupCallout) return false;
    return true;
  });

  if (groupCalloutSafe.length > 0) return shufflePrompts(groupCalloutSafe)[0];
  if (intensityMatches.length > 0) return shufflePrompts(intensityMatches)[0];

  const safeFallbackMatches = availablePrompts.filter((prompt) => {
    if (prompt.openingStyle === "group-callout" && hasRecentGroupCallout) return false;
    if (recentHasSexOrDating && isSexOrDatingPrompt(prompt)) return false;
    return true;
  });

  if (safeFallbackMatches.length > 0) return shufflePrompts(safeFallbackMatches)[0];
  return shufflePrompts(availablePrompts)[0];
}

export function createPromptQueue(
  prompts: Prompt[],
  options: PromptQueueOptions
) {
  const categoryPrompts = shufflePrompts(
    prompts.filter((p) => p.category === options.category)
  );

  const pool = options.excludeIds && options.excludeIds.size > 0
    ? categoryPrompts.filter((p) => !options.excludeIds!.has(p.id))
    : categoryPrompts;

  const availablePrompts = pool.length > 0 ? [...pool] : [...categoryPrompts];

  if (!options.useIntensityProgression) {
    return availablePrompts;
  }

  const queue: Prompt[] = [];

  while (availablePrompts.length > 0) {
    const roundIndex = queue.length;
    const allowedIntensities = getAllowedIntensities(roundIndex, options.category);
    const recentPrompts = queue.slice(-2);

    const selectedPrompt = pullPrompt(
      availablePrompts,
      allowedIntensities,
      recentPrompts
    );

    queue.push(selectedPrompt);
    availablePrompts.splice(
      availablePrompts.findIndex((p) => p.id === selectedPrompt.id),
      1
    );
  }

  return queue;
}