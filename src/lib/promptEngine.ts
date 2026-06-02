import type { Prompt } from "@/data/prompts";

export type PromptQueueOptions = {
  category: string;
  useIntensityProgression?: boolean;
};

function shufflePrompts(promptList: Prompt[]) {
  return [...promptList].sort(() => Math.random() - 0.5);
}

function getAllowedIntensities(roundIndex: number) {
  const questionNumber = roundIndex + 1;

  if (questionNumber <= 2) return [1];
  if (questionNumber <= 4) return [2];
  if (questionNumber <= 6) return [3];

  if (questionNumber === 7) return [1, 2];

  if (questionNumber >= 8) {
    if (questionNumber % 3 === 0) return [1, 2, 3];
    return [3];
  }

  return [1];
}

function pullPrompt(
  availablePrompts: Prompt[],
  allowedIntensities: number[],
  recentPrompts: Prompt[]
) {
  const hasRecentGroupCallout = recentPrompts.some(
    (prompt) => prompt.openingStyle === "group-callout"
  );

  const intensityMatches = availablePrompts.filter((prompt) =>
    allowedIntensities.includes(Number(prompt.entryIntensity))
  );

  const safeIntensityMatches = intensityMatches.filter((prompt) => {
    if (prompt.openingStyle !== "group-callout") return true;
    return !hasRecentGroupCallout;
  });

  if (safeIntensityMatches.length > 0) {
    return shufflePrompts(safeIntensityMatches)[0];
  }

  if (intensityMatches.length > 0) {
    return shufflePrompts(intensityMatches)[0];
  }

  const safeFallbackMatches = availablePrompts.filter((prompt) => {
    if (prompt.openingStyle !== "group-callout") return true;
    return !hasRecentGroupCallout;
  });

  if (safeFallbackMatches.length > 0) {
    return shufflePrompts(safeFallbackMatches)[0];
  }

  return shufflePrompts(availablePrompts)[0];
}

export function createPromptQueue(
  prompts: Prompt[],
  options: PromptQueueOptions
) {
  const categoryPrompts = prompts.filter(
    (prompt) => prompt.category === options.category
  );

  if (!options.useIntensityProgression) {
    return shufflePrompts(categoryPrompts);
  }

  const availablePrompts = [...categoryPrompts];
  const queue: Prompt[] = [];

  while (availablePrompts.length > 0) {
    const roundIndex = queue.length;
    const allowedIntensities = getAllowedIntensities(roundIndex);
    const recentPrompts = queue.slice(-2);

const selectedPrompt = pullPrompt(
  availablePrompts,
  allowedIntensities,
  recentPrompts
);

    queue.push(selectedPrompt);

    const selectedIndex = availablePrompts.findIndex(
      (prompt) => prompt.id === selectedPrompt.id
    );

    availablePrompts.splice(selectedIndex, 1);
  }

  return queue;
}