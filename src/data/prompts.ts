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

  openingStyle:
    | "group-callout"
    | "story"
    | "self"
    | "hypothetical"
    | "opinion";

  tags: string[];
};

export const prompts: Prompt[] = [
 
  {
    id: "funny-008",
    category: "funny",
    title: "Silent Lurker Edition",
    mainPrompt: "Who’s been way too quiet… and now you’re starting to get suspicious?",
    reveals: [
      {
        label: "Follow-up",
        text: "Are they shy — or just collecting data for future gossip?",
      },
      {
        label: "Roast Bait",
        text: "Who here gives silent assassin energy?",
      },
    ],
    entryIntensity: 4,
    finalIntensity: 4,
    risk: "medium",
    type: "opinion",
    openingStyle: "group-callout",
    tags: ["quiet", "group", "gossip", "suspicion"],
  },

  {
    id: "funny-013",
    category: "funny",
    title: "Trying Too Hard Edition",
    mainPrompt: "Who’s clearly trying the hardest to be liked tonight?",
    reveals: [
      {
        label: "Follow-up",
        text: "Is it working — or is it just getting awkward?",
      },
      {
        label: "Roast Bait",
        text: "Who here gives off audition energy every time they speak?",
      },
    ],
    entryIntensity: 4,
    finalIntensity: 4,
    risk: "medium",
    type: "opinion",
    openingStyle: "group-callout",
    tags: ["group", "social", "callout", "awkward"],
  },

  {
    id: "funny-014",
    category: "funny",
    title: "Red Flag Energy Edition",
    mainPrompt: "Who in this group gives off clear red flag energy — but still somehow gets away with it?",
    reveals: [
      {
        label: "Follow-up",
        text: "Are they charming… or just dangerous with good lighting?",
      },
      {
        label: "Roast Bait",
        text: "Who here should come with a warning label and a detailed escape plan?",
      },
    ],
    entryIntensity: 4,
    finalIntensity: 4,
    risk: "medium",
    type: "opinion",
    openingStyle: "group-callout",
    tags: ["red flags", "group", "social", "callout"],
  },

  {
    id: "funny-018",
    category: "funny",
    title: "Savage Self-Awareness Edition",
    mainPrompt: "What’s a trait you have that would absolutely annoy you in someone else?",
    reveals: [
      {
        label: "Follow-up",
        text: "Do you try to hide it — or own it?",
      },
      {
        label: "Roast Bait",
        text: "Who here is allergic to self-awareness?",
      },
    ],
    entryIntensity: 4,
    finalIntensity: 4,
    risk: "medium",
    type: "confession",
    openingStyle: "self",
    tags: ["self awareness", "personality", "group", "chaos"],
  },

  {
    id: "funny-019",
    category: "funny",
    title: "Pet Peeve Confessions",
    mainPrompt: "What’s something small that makes you instantly dislike a person?",
    reveals: [
      {
        label: "Follow-up",
        text: "Have you ever ditched someone over it?",
      },
      {
        label: "Roast Bait",
        text: "Who here clearly judges people way too fast?",
      },
    ],
    entryIntensity: 4,
    finalIntensity: 4,
    risk: "medium",
    type: "opinion",
    openingStyle: "self",
    tags: ["pet peeves", "social", "judgment", "group"],
  },

  {
    id: "funny-016",
    category: "funny",
    title: "Texting Hell Edition",
    mainPrompt: "What’s the worst message you’ve ever sent to the wrong person — and what did it say?",
    reveals: [
      {
        label: "Follow-up",
        text: "Did you explain it — or just disappear?",
      },
      {
        label: "Roast Bait",
        text: "Who here would needs a confirmation screen before sending texts?",
      },
    ],
    entryIntensity: 3,
    finalIntensity: 4,
    risk: "medium",
    type: "story",
    openingStyle: "story",
    tags: ["texting", "awkward", "social", "chaos"],
  },


  {
    id: "funny-027",
    category: "funny",
    title: "Chaos Magnet Edition",
    mainPrompt: "What’s the most dumbest drama you’ve ever started?",
    reveals: [
      {
        label: "Follow-up",
        text: "Did you make it worse — or sneak out before it got ugly?",
      },
      {
        label: "Roast Bait",
        text: "Who here is acting innocent but clearly lives for chaos?",
      },
    ],
    entryIntensity: 3,
    finalIntensity: 4,
    risk: "medium",
    type: "story",
    openingStyle: "story",
    tags: ["drama", "chaos", "accidental", "social"],
  },

  {
    id: "funny-033",
    category: "funny",
    title: "First Date Secrets Edition",
    mainPrompt: "What’s something embarrassing you’d never share on a first date?",
    reveals: [
      {
        label: "Follow-up",
        text: "At what point would you finally tell them — or do you just hope they never find out?",
      },
      {
        label: "Roast Bait",
        text: "Who here’s one overshare away from scaring off their soulmate?",
      },
    ],
    entryIntensity: 3,
    finalIntensity: 4,
    risk: "medium",
    type: "confession",
    openingStyle: "self",
    tags: ["dating", "first date", "embarrassing", "confession"],
  },

  {
    id: "funny-035",
    category: "funny",
    title: "Backfire Edition",
    mainPrompt: "What’s something you did to look cool… that instantly backfired?",
    reveals: [
      {
        label: "Follow-up",
        text: "Did you try to save it — or pretend it didn’t happen?",
      },
      {
        label: "Roast Bait",
        text: " -Spechless. ",
      },
    ],
    entryIntensity: 3,
    finalIntensity: 4,
    risk: "medium",
    type: "story",
    openingStyle: "story",
    tags: ["embarrassing", "ego", "backfire", "social"],
  },

  {
    id: "funny-052",
    category: "funny",
    title: "Stereotype Spiral Edition",
    mainPrompt: "What’s a stereotype you still believe is 100% true?",
    reveals: [
      {
        label: "Follow-up",
        text: "Be honest — did you learn that from experience, or are you just messy?",
      },
      {
        label: "Roast Bait",
        text: "Who here reacted a little too fast to this question?",
      },
    ],
    entryIntensity: 3,
    finalIntensity: 4,
    risk: "medium",
    type: "opinion",
    openingStyle: "opinion",
    tags: ["stereotypes", "hot take", "messy", "debate"],
  },

  {
    id: "funny-053",
    category: "funny",
    title: "Exposing the Ego Edition",
    mainPrompt: "What’s something you lowkey think you’re better at than most people?",
    reveals: [
      {
        label: "Follow-up",
        text: "Have you ever actually been humbled?",
      },
      {
        label: "Roast Bait",
        text: "Who here needs to be knocked down a peg?",
      },
    ],
    entryIntensity: 3,
    finalIntensity: 4,
    risk: "medium",
    type: "confession",
    openingStyle: "self",
    tags: ["ego", "skill", "humbling", "self-exposure"],
  },

  {
    id: "funny-054",
    category: "funny",
    title: "Truth Hurts Edition",
    mainPrompt: "What’s something people say to be nice — that actually lowkey insults you?",
    reveals: [
      {
        label: "Follow-up",
        text: "Did you call them out or fake a smile?",
      },
      {
        label: "Roast Bait",
        text: "Who here definitely took it too personal?",
      },
    ],
    entryIntensity: 3,
    finalIntensity: 4,
    risk: "medium",
    type: "story",
    openingStyle: "story",
    tags: ["insults", "social", "sensitivity", "truth"],
  },

  {
    id: "funny-055",
    category: "funny",
    title: "Group Callout Edition",
    mainPrompt: "What’s an annoying group habit that no one here will admit?",
    reveals: [
      {
        label: "Follow-up",
        text: "Are you guilty too — or just here to expose everyone else?",
      },
      {
        label: "Roast Bait",
        text: "Who here is definitely the main problem?",
      },
    ],
    entryIntensity: 3,
    finalIntensity: 4,
    risk: "medium",
    type: "opinion",
    openingStyle: "opinion",
    tags: ["group", "habits", "callout", "social"],
  },

  {
    id: "funny-059",
    category: "funny",
    title: "Keyboard Warrior Edition",
    mainPrompt: "What’s something bold you’ve said online… that you’d never say in real life?",
    reveals: [
      {
        label: "Follow-up",
        text: "Would you stand on it if the person showed up — or run for cover?",
      },
      {
        label: "Roast Bait",
        text: "Who here is brave as hell behind a screen but silent in person?",
      },
    ],
    entryIntensity: 3,
    finalIntensity: 4,
    risk: "medium",
    type: "confession",
    openingStyle: "self",
    tags: ["internet", "bold", "cowardice", "social"],
  },

  {
    id: "funny-061",
    category: "funny",
    title: "Wrong Place, Wrong Time Edition",
    mainPrompt: "What’s the wildest situation you accidentally walked in on — or got dragged into?",
    reveals: [
      {
        label: "Follow-up",
        text: "Did you stay out of it… or somehow make it worse just by being there?",
      },
      {
        label: "Roast Bait",
        text: "Who attracts drama like they subscribed to it?",
      },
    ],
    entryIntensity: 3,
    finalIntensity: 4,
    risk: "medium",
    type: "story",
    openingStyle: "story",
    tags: ["drama", "accidental", "wrong place", "story"],
  },

  {
    id: "funny-002",
    category: "funny",
    title: "Public Embarrassment Edition",
    mainPrompt: "What’s the most humiliating thing that’s ever happened to you in public?",
    reveals: [
      {
        label: "Follow-up",
        text: "Did you recover?",
      },
      {
        label: "Roast Bait",
        text: "Who here should still be embarrassed?",
      },
    ],
    entryIntensity: 3,
    finalIntensity: 3,
    risk: "medium",
    type: "story",
    openingStyle: "story",
    tags: ["embarrassing", "public", "funny"],
  },

  {
    id: "funny-007",
    category: "funny",
    title: "Side-Eye Sensei Edition",
    mainPrompt: "Who’s clearly judging everyone… but hasn’t said a single word?",
    reveals: [
      {
        label: "Follow-up",
        text: "Are they silently observing… or just plotting their exit?",
      },
      {
        label: "Roast Bait",
        text: "Who here has that “I’m too good for this” face on lock?",
      },
    ],
    entryIntensity: 3,
    finalIntensity: 3,
    risk: "medium",
    type: "opinion",
    openingStyle: "group-callout",
    tags: ["judging", "group", "social", "facial expression"],
  },

  {
    id: "funny-011",
    category: "funny",
    title: "Midnight Brain Edition",
    mainPrompt: "What’s the weirdest thing your brain has convinced you to do at 2AM?",
    reveals: [
      {
        label: "Follow-up",
        text: "Did you go through with it?",
      },
      {
        label: "Roast Bait",
        text: "Who just needs to go to bed and stop being stupid?",
      },
    ],
    entryIntensity: 3,
    finalIntensity: 3,
    risk: "medium",
    type: "story",
    openingStyle: "story",
    tags: ["night", "chaos", "impulse", "weird"],
  },

  {
    id: "funny-012",
    category: "funny",
    title: "Fake Scenario Cinematics",
    mainPrompt: "What’s the most ridiculous fake scenario you’ve ever played out in your head?",
    reveals: [
      {
        label: "Follow-up",
        text: "What triggered it?",
      },
      {
        label: "Roast Bait",
        text: "Who here’s winning imaginary Oscars for delusions no one asked for?",
      },
    ],
    entryIntensity: 3,
    finalIntensity: 3,
    risk: "low",
    type: "story",
    openingStyle: "story",
    tags: ["imagination", "delusion", "funny", "inner monologue"],
  },

  {
    id: "funny-024",
    category: "funny",
    title: "Silent Reactor Edition",
    mainPrompt: "Who always watches the drama in the group… but never says a word?",
    reveals: [
      {
        label: "Follow-up",
        text: "Are they keeping the peace — or just enjoying the show?",
      },
      {
        label: "Roast Bait",
        text: "Who here’s clearly running a secret documentary on all of us?",
      },
    ],
    entryIntensity: 3,
    finalIntensity: 3,
    risk: "medium",
    type: "opinion",
    openingStyle: "group-callout",
    tags: ["drama", "quiet", "group", "observing"],
  },

  {
    id: "funny-004",
    category: "funny",
    title: "Bad Excuse Edition",
    mainPrompt: "What’s the dumbest excuse you’ve ever used to get out of something?",
    reveals: [
      {
        label: "Follow-up",
        text: "Did they buy it — or call you out on the spot?",
      },
      {
        label: "Roast Bait",
        text: "Who here is mentally saving these for later?",
      },
    ],
    entryIntensity: 2,
    finalIntensity: 3,
    risk: "low",
    type: "story",
    openingStyle: "story",
    tags: ["lying", "funny", "social", "excuses"],
  },

  {
    id: "funny-009",
    category: "funny",
    title: "Overexplainer Edition",
    mainPrompt: "Who in this group can’t tell a simple story without turning it into a TED Talk?",
    reveals: [
      {
        label: "Follow-up",
        text: "Do they even have a point — or are we just strapped in for the ride?",
      },
      {
        label: "Roast Bait",
        text: "Who here starts every story like we paid admission?",
      },
    ],
    entryIntensity: 2,
    finalIntensity: 3,
    risk: "low",
    type: "opinion",
    openingStyle: "group-callout",
    tags: ["storytelling", "friends", "chaotic", "group"],
  },

  {
    id: "funny-022",
    category: "funny",
    title: "Loudest Laugh in the Room Edition",
    mainPrompt: "Who’s got a laugh so loud it starts more chaos than the joke?",
    reveals: [
      {
        label: "Follow-up",
        text: "Is it joy… or a cry for help?",
      },
      {
        label: "Roast Bait",
        text: "Who here laughs like they’re trying to win a contest?",
      },
    ],
    entryIntensity: 2,
    finalIntensity: 3,
    risk: "low",
    type: "opinion",
    openingStyle: "group-callout",
    tags: ["laughing", "group", "chaos", "social"],
  },

  {
    id: "funny-026",
    category: "funny",
    title: "Pointless Lie Edition",
    mainPrompt: "What's a lie you fully commited to?",
    reveals: [
      {
        label: "Follow-up",
        text: "Did you ever come clean — or are you still holding the lie?",
      },
      {
        label: "Roast Bait",
        text: "Who in this group is definitely still lying about something dumb right now?",
      },
    ],
    entryIntensity: 3,
    finalIntensity: 3,
    risk: "low",
    type: "story",
    openingStyle: "story",
    tags: ["lying", "embarrassing", "commitment", "social"],
  },

  {
    id: "funny-030",
    category: "funny",
    title: "Regret Speedrun Edition",
    mainPrompt: "What’s a decision you instantly regretted?",
    reveals: [
      {
        label: "Follow-up",
        text: "Did you try to fix it?",
      },
      {
        label: "Roast Bait",
        text: "Who here clearly trusts their instincts way too much?",
      },
    ],
    entryIntensity: 2,
    finalIntensity: 3,
    risk: "low",
    type: "story",
    openingStyle: "story",
    tags: ["regret", "decision", "delusion", "chaos"],
  },

  {
    id: "funny-031",
    category: "funny",
    title: "Impulse Chaos Edition",
    mainPrompt: "What’s something you knew was a bad idea… but did it anyway?",
    reveals: [
      {
        label: "Follow-up",
        text: "Did it flop like you expected — or somehow work out?",
      },
      {
        label: "Roast Bait",
        text: "Who treats red flags like green disco lights?",
      },
    ],
    entryIntensity: 2,
    finalIntensity: 3,
    risk: "low",
    type: "story",
    openingStyle: "self",
    tags: ["impulse", "bad ideas", "chaos", "risk"],
  },

  {
    id: "funny-032",
    category: "funny",
    title: "Weird Brag Edition",
    mainPrompt: "What’s something you’re weirdly proud of… but deep down you know it’s not that impressive?",
    reveals: [
      {
        label: "Follow-up",
        text: "Did anyone actually hype you up?",
      },
      {
        label: "Roast Bait",
        text: "Who here flexes like they’re allergic to self-awareness?",
      },
    ],
    entryIntensity: 2,
    finalIntensity: 3,
    risk: "low",
    type: "confession",
    openingStyle: "self",
    tags: ["bragging", "delusion", "self awareness", "funny"],
  },

  {
    id: "funny-036",
    category: "funny",
    title: "Speechless Moment Edition",
    mainPrompt: "What’s something someone said to you that left you completely speechless?",
    reveals: [
      {
        label: "Follow-up",
        text: "Did you ever think of a comeback?",
      },
      {
        label: "Roast Bait",
        text: "Who here’s still rehearsing clapbacks from 2016?",
      },
    ],
    entryIntensity: 2,
    finalIntensity: 3,
    risk: "low",
    type: "story",
    openingStyle: "story",
    tags: ["comebacks", "awkward", "speechless", "social"],
  },

  {
    id: "funny-037",
    category: "funny",
    title: "Cringe Magnet Edition",
    mainPrompt: "What’s something that still haunts you from middle school — and probably should?",
    reveals: [
      {
        label: "Follow-up",
        text: "Did anyone ever bring it up again — or did you get away clean?",
      },
      {
        label: "Roast Bait",
        text: "Skip the roast, y’all already damaged enough.",
      },
    ],
    entryIntensity: 3,
    finalIntensity: 3,
    risk: "low",
    type: "story",
    openingStyle: "story",
    tags: ["cringe", "middle school", "embarrassing", "memory"],
  },

  {
    id: "funny-042",
    category: "funny",
    title: "Unskilled & Proud Edition",
    mainPrompt: "What’s a basic skill you still haven’t learned — and somehow made it this far?",
    reveals: [
      {
        label: "Follow-up",
        text: "Has it ever caused a full-on disaster?",
      },
      {
        label: "Roast Bait",
        text: "Who here’s living proof that survival is sometimes just luck?",
      },
    ],
    entryIntensity: 2,
    finalIntensity: 3,
    risk: "low",
    type: "confession",
    openingStyle: "self",
    tags: ["skills", "adulting", "failure", "funny"],
  },

  {
    id: "funny-045",
    category: "funny",
    title: "Childhood Criminal Edition",
    mainPrompt: "What’s something lowkey illegal you did as a kid?",
    reveals: [
      {
        label: "Follow-up",
        text: "Did anyone ever find out later… or are you still holding the secret?",
      },
      {
        label: "Roast Bait",
        text: "Who here definitely had a chaotic childhood?",
      },
    ],
    entryIntensity: 2,
    finalIntensity: 3,
    risk: "low",
    type: "story",
    openingStyle: "story",
    tags: ["childhood", "chaos", "secret", "story"],
  },

  
  {
    id: "funny-056",
    category: "funny",
    title: "The Pretender Files",
    mainPrompt: "What’s something you pretend to understand… but actually don’t?",
    reveals: [
      {
        label: "Follow-up",
        text: "Have you been exposed — or still bluffing strong?",
      },
      {
        label: "Roast Bait",
        text: "Who here is faking 90% of their personality?",
      },
    ],
    entryIntensity: 2,
    finalIntensity: 3,
    risk: "low",
    type: "confession",
    openingStyle: "self",
    tags: ["pretending", "bluffing", "social", "confidence"],
  },

  {
    id: "funny-057",
    category: "funny",
    title: "Secret Failure Edition",
    mainPrompt: "What’s something you failed at… that no one knows about?",
    reveals: [
      {
        label: "Follow-up",
        text: "Did you learn from it — or pretend it never happened?",
      },
      {
        label: "Roast Bait",
        text: "Who here has a very selective memory?",
      },
    ],
    entryIntensity: 2,
    finalIntensity: 3,
    risk: "low",
    type: "confession",
    openingStyle: "self",
    tags: ["failure", "secret", "ego", "growth"],
  },

  {
    id: "funny-060",
    category: "funny",
    title: "Celebrity Delusion Edition",
    mainPrompt: "What’s the most delusional celebrity crush you’ve ever had?",
    reveals: [
      {
        label: "Follow-up",
        text: "Were you fully convinced you’d meet — or even date them?",
      },
      {
        label: "Roast Bait",
        text: "Who here was one fan edit away from filing marriage papers?",
      },
    ],
    entryIntensity: 2,
    finalIntensity: 3,
    risk: "low",
    type: "confession",
    openingStyle: "self",
    tags: ["celebrity", "crush", "delusion", "dating"],
  },

  {
    id: "funny-062",
    category: "funny",
    title: "Fake Fan Edition",
    mainPrompt: "What’s something everyone loves that you don’t get the hype about?",
    reveals: [
      {
        label: "Follow-up",
        text: "Have you ever pretended to like it just to fit in?",
      },
      {
        label: "Roast Bait",
        text: "Who here deserves jail time for their unpopular opinions?",
      },
    ],
    entryIntensity: 2,
    finalIntensity: 3,
    risk: "low",
    type: "opinion",
    openingStyle: "opinion",
    tags: ["unpopular opinion", "hype", "pretending", "social"],
  },

  {
    id: "funny-065",
    category: "funny",
    title: "Suspiciously Specific Edition",
    mainPrompt: "What’s a strange fear or phobia you have for no reason?",
    reveals: [
      {
        label: "Follow-up",
        text: "What happened the last time you got close to that fear?",
      },
      {
        label: "Roast Bait",
        text: "Who here is built the weakest??",
      },
    ],
    entryIntensity: 2,
    finalIntensity: 3,
    risk: "low",
    type: "confession",
    openingStyle: "self",
    tags: ["fear", "phobia", "weird", "specific"],
  },

  {
    id: "funny-005",
    category: "funny",
    title: "Loud Whisperer Edition",
    mainPrompt: "Who’s the absolute worst at whispering when the group’s trying to gossip in public?",
    reveals: [
      {
        label: "Follow-up",
        text: "Have they ever actually gotten you caught?",
      },
      {
        label: "Roast Bait",
        text: "Who here whispers like they’re wearing a megaphone?",
      },
    ],
    entryIntensity: 2,
    finalIntensity: 2,
    risk: "low",
    type: "opinion",
    openingStyle: "group-callout",
    tags: ["group", "gossip", "public", "chaos"],
  },

  {
    id: "funny-006",
    category: "funny",
    title: "The Late One Edition",
    mainPrompt: "Who’s the person in this group who’s never on time — and somehow never gets dragged for it?",
    reveals: [
      {
        label: "Follow-up",
        text: "Do they actually have good excuses… or just creative ones?",
      },
      {
        label: "Roast Bait",
        text: "Who here thinks “I’m on my way” means “I just woke up”?",
      },
    ],
    entryIntensity: 2,
    finalIntensity: 2,
    risk: "low",
    type: "opinion",
    openingStyle: "group-callout",
    tags: ["friends", "lateness", "group dynamics"],
  },

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
        text: "Who clearly gave the group their favorite storytime?",
      },
    ],
    entryIntensity: 1,
    finalIntensity: 2,
    risk: "low",
    type: "story",
    openingStyle: "story",
    tags: ["friends", "embarrassing", "group memory"],
  },

  {
    id: "funny-010",
    category: "funny",
    title: "Animal Instincts Edition",
    mainPrompt: "What’s an animal you irrationally think you could fight and win?",
    reveals: [
      {
        label: "Follow-up",
        text: "What would actually make you test this theory?",
      },
      {
        label: "Roast Bait",
        text: "Who here’s definitely dying in a fight with a goose?",
      },
    ],
    entryIntensity: 1,
    finalIntensity: 2,
    risk: "low",
    type: "opinion",
    openingStyle: "story",
    tags: ["animals", "chaos", "delusion"],
  },


  {
    id: "funny-040",
    category: "funny",
    title: "Family Secrets Edition",
    mainPrompt: "What’s something your family does that you thought was normal — until you told someone else?",
    reveals: [
      {
        label: "Follow-up",
        text: "How did they react when they found out?",
      },
      {
        label: "Roast Bait",
        text: "Who here’s family deserves a documentary?",
      },
    ],
    entryIntensity: 1,
    finalIntensity: 2,
    risk: "low",
    type: "story",
    openingStyle: "story",
    tags: ["family", "weird", "normal", "story"],
  },

  {
    id: "funny-041",
    category: "funny",
    title: "Delusional Dreams Edition",
    mainPrompt: "What’s something you seriously thought you’d be famous for as a kid?",
    reveals: [
      {
        label: "Follow-up",
        text: "When did the dream die — or are you still holding on?",
      },
      {
        label: "Roast Bait",
        text: "Who here’s still mentally in their Disney Channel audition era?",
      },
    ],
    entryIntensity: 1,
    finalIntensity: 2,
    risk: "low",
    type: "story",
    openingStyle: "self",
    tags: ["childhood", "dreams", "delusion", "fame"],
  },

  {
    id: "funny-044",
    category: "funny",
    title: "Snack Sabotage Edition",
    mainPrompt: "you ever ate something you were'nt supposed to eat?",
    reveals: [
      {
        label: "Follow-up",
        text: "Did you ever confess — or blame someone else?",
      },
      {
        label: "Roast Bait",
        text: "Who here is definitely banned from other people’s fridges?",
      },
    ],
    entryIntensity: 1,
    finalIntensity: 2,
    risk: "low",
    type: "story",
    openingStyle: "story",
    tags: ["food", "stealing", "shameless", "funny"],
  },

  {
    id: "funny-046",
    category: "funny",
    title: "Dumb Injury Edition",
    mainPrompt: "What’s the most ridiculous way you’ve ever hurt yourself?",
    reveals: [
      {
        label: "Follow-up",
        text: "Did it stop there — or did you somehow make it worse trying to fix it?",
      },
      {
        label: "Roast Bait",
        text: "Who here would survive the shortest in the wild?",
      },
    ],
    entryIntensity: 1,
    finalIntensity: 2,
    risk: "low",
    type: "story",
    openingStyle: "story",
    tags: ["injury", "clumsy", "story", "funny"],
  },

  {
    id: "funny-051",
    category: "funny",
    title: "Food Crimes Edition",
    mainPrompt: "What’s the most chaotic food combo you genuinely enjoy?",
    reveals: [
      {
        label: "Follow-up",
        text: "Did someone introduce you to it — or did you create this monstrosity yourself?",
      },
      {
        label: "Roast Bait",
        text: "Who here deserves a lifetime ban from the kitchen?",
      },
    ],
    entryIntensity: 1,
    finalIntensity: 2,
    risk: "low",
    type: "opinion",
    openingStyle: "self",
    tags: ["food", "taste", "chaos", "kitchen"],
  },

  {
    id: "funny-058",
    category: "funny",
    title: "Chaotic Talent Show Edition",
    mainPrompt: "What’s your weirdest hidden talent — or party trick — that always gets a reaction?",
    reveals: [
      {
        label: "Follow-up",
        text: "Is it actually impressive… or just concerning?",
      },
      {
        label: "Roast Bait",
        text: "Who here has been waiting their whole life for this question?",
      },
    ],
    entryIntensity: 1,
    finalIntensity: 2,
    risk: "low",
    type: "confession",
    openingStyle: "self",
    tags: ["talent", "party trick", "weird", "attention"],
  },

  {
    id: "funny-063",
    category: "funny",
    title: "Kitchen Catastrophe Edition",
    mainPrompt: "What’s the dumbest thing you’ve ever done while trying to cook?",
    reveals: [
      {
        label: "Follow-up",
        text: "Did you suffer alone, or convince someone else to try it too?",
      },
      {
        label: "Roast Bait",
        text: "Who here needs to be banned from the kitchen permanently?",
      },
    ],
    entryIntensity: 1,
    finalIntensity: 2,
    risk: "low",
    type: "story",
    openingStyle: "story",
    tags: ["cooking", "kitchen", "failure", "food"],
  },

  {
    id: "funny-066",
    category: "funny",
    title: "Animal Instinct Edition",
    mainPrompt: "If you got turned into an animal for a week — what chaos would you cause?",
    reveals: [
      {
        label: "Roast Bait",
        text: "Who here already acts feral and doesn’t need a transformation?",
      },
    ],
    entryIntensity: 2,
    finalIntensity: 2,
    risk: "low",
    type: "choice",
    openingStyle: "hypothetical",
    tags: ["animals", "hypothetical", "chaos", "feral"],
  },
];
