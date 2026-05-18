export type PromptReveal = {
  label: string;
  text: string;
};

export type Prompt = {
  id: string;
  category: string;
  title: string;
  mainPrompt: string;
  reveals: PromptReveal[];

  entryIntensity: number;
  finalIntensity: number;
  risk: "low" | "medium" | "high";
  type: "story" | "opinion" | "confession" | "debate" | "choice";
  tags: string[];
};

export const prompts: Prompt[] = [
  {
    id: "funny-001",
    category: "funny",
    title: "Bad Memory Lane Edition",
    mainPrompt: "What’s a story your friends will never let you escape from?",
    reveals: [
      {
        label: "Follow-up",
        text: "Have you owned it — or are you still trying to rewrite history?",
      },
      {
        label: "Roast Bait",
        text: "Who here clearly gave the group their favorite storytime content?",
      },
    ],
    entryIntensity: 1,
    finalIntensity: 2,
    risk: "low",
    type: "story",
    tags: ["friends", "embarrassing", "group memory"],
  },
  {
    id: "spicy-001",
    category: "spicy",
    title: "Mixed Signals Edition",
    mainPrompt: "What’s something people do when they’re clearly flirting but pretend they’re not?",
    reveals: [
      {
        label: "Follow-up",
        text: "Would you call it confidence, delusion, or strategy?",
      },
      {
        label: "Point Finger",
        text: "Who here thinks they’re subtle but absolutely is not?",
      },
    ],
    entryIntensity: 2,
    finalIntensity: 3,
    risk: "medium",
    type: "opinion",
    tags: ["flirting", "dating", "social tension"],
  },
  {
    id: "unhinged-001",
    category: "unhinged",
    title: "Public Chaos Edition",
    mainPrompt: "If you saw someone having a full argument with themselves in public, how long would you pretend not to notice?",
    reveals: [
      {
        label: "Follow-up",
        text: "At what point does curiosity defeat social manners?",
      },
      {
        label: "Roast Bait",
        text: "Who here would absolutely slow down just to hear the plot?",
      },
    ],
    entryIntensity: 1,
    finalIntensity: 2,
    risk: "low",
    type: "opinion",
    tags: ["public chaos", "social behavior", "funny"],
  },
  {
    id: "debate-001",
    category: "debate",
    title: "First Date Money Edition",
    mainPrompt: "Who should pay on the first date?",
    reveals: [
      {
        label: "Follow-up",
        text: "Does your answer change depending on who asked who out?",
      },
      {
        label: "Dig",
        text: "Is your answer about fairness, tradition, attraction, or ego?",
      },
    ],
    entryIntensity: 2,
    finalIntensity: 3,
    risk: "medium",
    type: "debate",
    tags: ["dating", "money", "values"],
  },
{
  id: "funny-002",
  category: "funny",
  title: "Public Embarrassment Edition",
  mainPrompt: "What’s the most humiliating thing that’s ever happened to you in public?",
  reveals: [
    {
      label: "Follow-up",
      text: "Did you recover smoothly — or did your soul leave your body?",
    },
    {
      label: "Roast Bait",
      text: "Who here definitely still thinks about something embarrassing before sleeping?",
    },
  ],
  entryIntensity: 1,
  finalIntensity: 2,
  risk: "low",
  type: "story",
  tags: ["embarrassing", "public", "funny"],
},
{
  id: "funny-003",
  category: "funny",
  title: "Delusional Confidence Edition",
  mainPrompt: "What’s something you were way too confident about before getting humbled?",
  reveals: [
    {
      label: "Follow-up",
      text: "How long did it take before reality hit?",
    },
    {
      label: "Roast Bait",
      text: "Who here walks into every situation like the main character regardless of skill?",
    },
  ],
  entryIntensity: 1,
  finalIntensity: 2,
  risk: "low",
  type: "story",
  tags: ["confidence", "ego", "funny"],
},
{
  id: "funny-004",
  category: "funny",
  title: "Bad Excuse Edition",
  mainPrompt: "What’s the dumbest excuse you’ve ever used to get out of something?",
  reveals: [
    {
      label: "Follow-up",
      text: "Did they believe you — or expose you immediately?",
    },
    {
      label: "Roast Bait",
      text: "Who here lies with the confidence of someone who rehearsed in the mirror?",
    },
  ],
  entryIntensity: 1,
  finalIntensity: 2,
  risk: "low",
  type: "story",
  tags: ["lying", "funny", "social"],
}  
];