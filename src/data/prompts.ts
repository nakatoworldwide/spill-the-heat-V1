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
  type: "story" | "opinion" | "confession" | "debate" | "choice" | "action";
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
    mainPrompt: "Who's been way too quiet… and now you're starting to get suspicious?",
    reveals: [
      { label: "Follow-up", text: "Are they shy — or just collecting data for future gossip?" },
      { label: "Roast Bait", text: "Who here gives silent assassin energy?" },
    ],
    entryIntensity: 4, finalIntensity: 4, risk: "medium", type: "opinion", openingStyle: "group-callout",
    tags: ["quiet", "group", "gossip", "suspicion"],
  },

  {
    id: "funny-013",
    category: "funny",
    title: "Trying Too Hard Edition",
    mainPrompt: "Who's clearly trying the hardest to be liked tonight?",
    reveals: [
      { label: "Follow-up", text: "Is it working — or is it just getting awkward?" },
      { label: "Roast Bait", text: "Who here gives off audition energy every time they speak?" },
    ],
    entryIntensity: 4, finalIntensity: 4, risk: "medium", type: "opinion", openingStyle: "group-callout",
    tags: ["group", "social", "callout", "awkward"],
  },

  {
    id: "funny-014",
    category: "funny",
    title: "Red Flag Energy Edition",
    mainPrompt: "Who in this group gives off clear red flag energy — but still somehow gets away with it?",
    reveals: [
      { label: "Follow-up", text: "Are they charming… or just dangerous with good lighting?" },
      { label: "Roast Bait", text: "Who here should come with a warning label and an escape plan?" },
    ],
    entryIntensity: 4, finalIntensity: 4, risk: "medium", type: "opinion", openingStyle: "group-callout",
    tags: ["red flags", "group", "social", "callout"],
  },

  {
    id: "funny-018",
    category: "funny",
    title: "Savage Self-Awareness Edition",
    mainPrompt: "What's a trait you have that would absolutely annoy you in someone else?",
    reveals: [
      { label: "Follow-up", text: "Do you try to hide it — or own it?" },
      { label: "Roast Bait", text: "Who here is allergic to self-awareness?" },
    ],
    entryIntensity: 4, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["self awareness", "personality", "group", "chaos"],
  },

  {
    id: "funny-019",
    category: "funny",
    title: "Pet Peeve Confessions",
    mainPrompt: "What's something small that makes you instantly dislike a person?",
    reveals: [
      { label: "Follow-up", text: "Have you ever ditched someone over it?" },
      { label: "Roast Bait", text: "Who here clearly judges people way too fast?" },
    ],
    entryIntensity: 4, finalIntensity: 4, risk: "medium", type: "opinion", openingStyle: "self",
    tags: ["pet peeves", "social", "judgment", "group"],
  },

  {
    id: "funny-077",
    category: "funny",
    title: "Refuses To Stop Edition",
    mainPrompt: "What's something insane you do that makes sense only to you — and you refuse to stop?",
    reveals: [
      { label: "Follow-up", text: "Who tried to fix you… and failed?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["insane", "habits", "chaos", "unhinged"],
  },

  {
    id: "funny-016",
    category: "funny",
    title: "Texting Hell Edition",
    mainPrompt: "What's the worst message you've ever sent to the wrong person — and what did it say?",
    reveals: [
      { label: "Follow-up", text: "Did you explain it — or just disappear?" },
      { label: "Roast Bait", text: "Who here needs a confirmation screen before sending texts?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "story", openingStyle: "story",
    tags: ["texting", "awkward", "social", "chaos"],
  },

  {
    id: "funny-027",
    category: "funny",
    title: "Chaos Magnet Edition",
    mainPrompt: "What's the dumbest drama you've ever started?",
    reveals: [
      { label: "Follow-up", text: "Did you make it worse — or sneak out before it got ugly?" },
      { label: "Roast Bait", text: "Who here is acting innocent but clearly lives for chaos?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "story", openingStyle: "story",
    tags: ["drama", "chaos", "accidental", "social"],
  },

  {
    id: "funny-033",
    category: "funny",
    title: "First Date Secrets Edition",
    mainPrompt: "What's something embarrassing you'd never share on a first date?",
    reveals: [
      { label: "Follow-up", text: "At what point would you finally tell them — or do you just pray they never find out?" },
      { label: "Roast Bait", text: "Who here's one overshare away from scaring off their soulmate?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["dating", "first date", "embarrassing", "confession"],
  },

  {
    id: "funny-035",
    category: "funny",
    title: "Backfire Edition",
    mainPrompt: "What's something you did to look cool… that instantly backfired?",
    reveals: [
      { label: "Follow-up", text: "Did you try to save it — or pretend it didn't happen?" },
      { label: "Roast Bait", text: "Speechless. Take a moment." },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "story", openingStyle: "story",
    tags: ["embarrassing", "ego", "backfire", "social"],
  },

  {
    id: "funny-052",
    category: "funny",
    title: "Stereotype Spiral Edition",
    mainPrompt: "What's a stereotype you still believe is 100% true?",
    reveals: [
      { label: "Follow-up", text: "Be honest — did you learn that from experience, or are you just messy?" },
      { label: "Roast Bait", text: "Who here answered a little too fast?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "opinion", openingStyle: "opinion",
    tags: ["stereotypes", "hot take", "messy", "debate"],
  },

  {
    id: "funny-053",
    category: "funny",
    title: "Exposing the Ego Edition",
    mainPrompt: "What's something you lowkey think you're better at than most people?",
    reveals: [
      { label: "Follow-up", text: "Have you ever actually been humbled?" },
      { label: "Roast Bait", text: "Who here needs to be knocked down a peg?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["ego", "skill", "humbling", "self-exposure"],
  },

  {
    id: "funny-054",
    category: "funny",
    title: "Truth Hurts Edition",
    mainPrompt: "What's something people say to be nice — that's actually lowkey an insult?",
    reveals: [
      { label: "Follow-up", text: "Did you call them out or fake a smile?" },
      { label: "Roast Bait", text: "Who here definitely took it too personal?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "story", openingStyle: "story",
    tags: ["insults", "social", "sensitivity", "truth"],
  },

  {
    id: "funny-055",
    category: "funny",
    title: "Group Callout Edition",
    mainPrompt: "What's an annoying group habit that no one here will admit?",
    reveals: [
      { label: "Follow-up", text: "Are you guilty too — or just here to expose everyone else?" },
      { label: "Roast Bait", text: "Who here is definitely the main problem?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "opinion", openingStyle: "opinion",
    tags: ["group", "habits", "callout", "social"],
  },

  {
    id: "funny-059",
    category: "funny",
    title: "Keyboard Warrior Edition",
    mainPrompt: "What's something bold you've said online… that you'd never say to someone's face?",
    reveals: [
      { label: "Follow-up", text: "Would you stand on it if the person showed up — or run for cover?" },
      { label: "Roast Bait", text: "Who here is fearless behind a screen but silent in person?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["internet", "bold", "cowardice", "social"],
  },

  {
    id: "funny-061",
    category: "funny",
    title: "Wrong Place, Wrong Time Edition",
    mainPrompt: "What's the wildest situation you accidentally walked in on — or got dragged into?",
    reveals: [
      { label: "Follow-up", text: "Did you stay out of it… or make it worse just by being there?" },
      { label: "Roast Bait", text: "Who attracts drama like they subscribed to it?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "story", openingStyle: "story",
    tags: ["drama", "accidental", "wrong place", "story"],
  },

  {
    id: "funny-002",
    category: "funny",
    title: "Public Embarrassment Edition",
    mainPrompt: "What's the most humiliating thing that's ever happened to you in public?",
    reveals: [
      { label: "Follow-up", text: "Did you ever recover?" },
      { label: "Roast Bait", text: "Who here should honestly still be embarrassed?" },
    ],
    entryIntensity: 3, finalIntensity: 3, risk: "medium", type: "story", openingStyle: "story",
    tags: ["embarrassing", "public", "funny"],
  },

  {
    id: "funny-007",
    category: "funny",
    title: "Side-Eye Sensei Edition",
    mainPrompt: "Who's clearly judging everyone… but hasn't said a single word?",
    reveals: [
      { label: "Follow-up", text: "Are they silently observing… or plotting their exit?" },
      { label: "Roast Bait", text: "Who here has that 'I'm too good for this' face on lock?" },
    ],
    entryIntensity: 3, finalIntensity: 3, risk: "medium", type: "opinion", openingStyle: "group-callout",
    tags: ["judging", "group", "social", "facial expression"],
  },

  {
    id: "funny-011",
    category: "funny",
    title: "Midnight Brain Edition",
    mainPrompt: "What's the weirdest thing your brain has convinced you to do at 2AM?",
    reveals: [
      { label: "Follow-up", text: "Did you actually go through with it?" },
      { label: "Roast Bait", text: "Who just needs to go to bed and stop being stupid?" },
    ],
    entryIntensity: 3, finalIntensity: 3, risk: "medium", type: "story", openingStyle: "story",
    tags: ["night", "chaos", "impulse", "weird"],
  },

  {
    id: "funny-012",
    category: "funny",
    title: "Fake Scenario Cinematics",
    mainPrompt: "What's the most ridiculous fake scenario you've ever played out in your head?",
    reveals: [
      { label: "Follow-up", text: "What triggered it?" },
      { label: "Roast Bait", text: "Who here's winning imaginary Oscars for delusions no one asked for?" },
    ],
    entryIntensity: 3, finalIntensity: 3, risk: "low", type: "story", openingStyle: "story",
    tags: ["imagination", "delusion", "funny", "inner monologue"],
  },

  {
    id: "funny-024",
    category: "funny",
    title: "Silent Reactor Edition",
    mainPrompt: "Who always watches the drama in the group… but never says a word?",
    reveals: [
      { label: "Follow-up", text: "Are they keeping the peace — or just enjoying the show?" },
      { label: "Roast Bait", text: "Who here's clearly filming a secret documentary on all of us?" },
    ],
    entryIntensity: 3, finalIntensity: 3, risk: "medium", type: "opinion", openingStyle: "group-callout",
    tags: ["drama", "quiet", "group", "observing"],
  },

  {
    id: "funny-004",
    category: "funny",
    title: "Bad Excuse Edition",
    mainPrompt: "What's the dumbest excuse you've ever used to get out of something?",
    reveals: [
      { label: "Follow-up", text: "Did they buy it — or call you out on the spot?" },
      { label: "Roast Bait", text: "Who here is mentally saving these for later?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "story", openingStyle: "story",
    tags: ["lying", "funny", "social", "excuses"],
  },

  {
    id: "funny-009",
    category: "funny",
    title: "Overexplainer Edition",
    mainPrompt: "Who in this group can't tell a simple story without turning it into a TED Talk?",
    reveals: [
      { label: "Follow-up", text: "Do they even have a point — or are we just strapped in for the ride?" },
      { label: "Roast Bait", text: "Who here starts every story like we paid admission?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "opinion", openingStyle: "group-callout",
    tags: ["storytelling", "friends", "chaotic", "group"],
  },

  {
    id: "funny-022",
    category: "funny",
    title: "Loudest Laugh in the Room Edition",
    mainPrompt: "Who's got a laugh so loud it starts more chaos than the joke?",
    reveals: [
      { label: "Follow-up", text: "Is it joy… or a cry for help?" },
      { label: "Roast Bait", text: "Who here laughs like they're competing for a prize?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "opinion", openingStyle: "group-callout",
    tags: ["laughing", "group", "chaos", "social"],
  },

  {
    id: "funny-026",
    category: "funny",
    title: "Pointless Lie Edition",
    mainPrompt: "What's a lie you fully committed to?",
    reveals: [
      { label: "Follow-up", text: "Did you ever come clean — or are you still living the lie?" },
      { label: "Roast Bait", text: "Who in this group is definitely still lying about something dumb right now?" },
    ],
    entryIntensity: 3, finalIntensity: 3, risk: "low", type: "story", openingStyle: "story",
    tags: ["lying", "embarrassing", "commitment", "social"],
  },

  {
    id: "funny-030",
    category: "funny",
    title: "Regret Speedrun Edition",
    mainPrompt: "What's a decision you regretted within seconds?",
    reveals: [
      { label: "Follow-up", text: "Did you try to fix it — or just live with it?" },
      { label: "Roast Bait", text: "Who here trusts their instincts way too much?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "story", openingStyle: "story",
    tags: ["regret", "decision", "delusion", "chaos"],
  },

  {
    id: "funny-031",
    category: "funny",
    title: "Impulse Chaos Edition",
    mainPrompt: "What's something you knew was a bad idea… but did it anyway?",
    reveals: [
      { label: "Follow-up", text: "Did it flop like you expected — or somehow work out?" },
      { label: "Roast Bait", text: "Who treats red flags like green disco lights?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "story", openingStyle: "self",
    tags: ["impulse", "bad ideas", "chaos", "risk"],
  },

  {
    id: "funny-032",
    category: "funny",
    title: "Weird Brag Edition",
    mainPrompt: "What's something you're weirdly proud of… that deep down you know isn't impressive?",
    reveals: [
      { label: "Follow-up", text: "Did anyone ever actually hype you up for it?" },
      { label: "Roast Bait", text: "Who here flexes like they're allergic to self-awareness?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "confession", openingStyle: "self",
    tags: ["bragging", "delusion", "self awareness", "funny"],
  },

  {
    id: "funny-036",
    category: "funny",
    title: "Speechless Moment Edition",
    mainPrompt: "What's something someone said to you that left you completely speechless?",
    reveals: [
      { label: "Follow-up", text: "Did you ever think of a comeback?" },
      { label: "Roast Bait", text: "Who here's still rehearsing clapbacks from 2016?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "story", openingStyle: "story",
    tags: ["comebacks", "awkward", "speechless", "social"],
  },

  {
    id: "funny-037",
    category: "funny",
    title: "Cringe Magnet Edition",
    mainPrompt: "What's something from middle school that still haunts you — and honestly should?",
    reveals: [
      { label: "Follow-up", text: "Did anyone ever bring it up again — or did you get away clean?" },
      { label: "Roast Bait", text: "Skip the roast. Y'all are damaged enough." },
    ],
    entryIntensity: 3, finalIntensity: 3, risk: "low", type: "story", openingStyle: "story",
    tags: ["cringe", "middle school", "embarrassing", "memory"],
  },

  {
    id: "funny-042",
    category: "funny",
    title: "Unskilled & Proud Edition",
    mainPrompt: "What's a basic life skill you still haven't learned — and somehow made it this far?",
    reveals: [
      { label: "Follow-up", text: "Has it ever caused a full-on disaster?" },
      { label: "Roast Bait", text: "Who here is living proof that survival is sometimes just luck?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "confession", openingStyle: "self",
    tags: ["skills", "adulting", "failure", "funny"],
  },

  {
    id: "funny-045",
    category: "funny",
    title: "Childhood Criminal Edition",
    mainPrompt: "What's something lowkey illegal you did as a kid — and got away with?",
    reveals: [
      { label: "Follow-up", text: "Did anyone ever find out… or are you still holding the secret?" },
      { label: "Roast Bait", text: "Who here definitely had a chaotic childhood?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "story", openingStyle: "story",
    tags: ["childhood", "chaos", "secret", "story"],
  },

  {
    id: "funny-088",
    category: "funny",
    title: "Just To See Edition",
    mainPrompt: "What's something you did just to see if you could get away with it?",
    reveals: [
      { label: "Follow-up", text: "Did it end in chaos — or did you win?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["chaos", "power", "impulse"],
  },

  {
    id: "funny-056",
    category: "funny",
    title: "The Pretender Files",
    mainPrompt: "What's something you pretend to understand… but actually don't?",
    reveals: [
      { label: "Follow-up", text: "Have you been exposed — or still bluffing strong?" },
      { label: "Roast Bait", text: "Who here is faking 90% of their personality?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "confession", openingStyle: "self",
    tags: ["pretending", "bluffing", "social", "confidence"],
  },

  {
    id: "funny-057",
    category: "funny",
    title: "Secret Failure Edition",
    mainPrompt: "What's something you failed at… that no one knows about?",
    reveals: [
      { label: "Follow-up", text: "Did you learn from it — or pretend it never happened?" },
      { label: "Roast Bait", text: "Who here has a very selective memory?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "confession", openingStyle: "self",
    tags: ["failure", "secret", "ego", "growth"],
  },

  {
    id: "funny-060",
    category: "funny",
    title: "Celebrity Delusion Edition",
    mainPrompt: "What's the most delusional celebrity crush you've ever had?",
    reveals: [
      { label: "Follow-up", text: "Were you fully convinced you'd meet — or even date them?" },
      { label: "Roast Bait", text: "Who here was one fan edit away from filing marriage papers?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "confession", openingStyle: "self",
    tags: ["celebrity", "crush", "delusion", "dating"],
  },

  {
    id: "funny-062",
    category: "funny",
    title: "Fake Fan Edition",
    mainPrompt: "What's something everyone loves that you secretly don't get the hype about?",
    reveals: [
      { label: "Follow-up", text: "Have you ever pretended to like it just to fit in?" },
      { label: "Roast Bait", text: "Who here deserves jail time for their opinions?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "opinion", openingStyle: "opinion",
    tags: ["unpopular opinion", "hype", "pretending", "social"],
  },

  {
    id: "funny-065",
    category: "funny",
    title: "Suspiciously Specific Edition",
    mainPrompt: "What's a strange fear or phobia you have for absolutely no reason?",
    reveals: [
      { label: "Follow-up", text: "What happened the last time you got close to it?" },
      { label: "Roast Bait", text: "Who here is built the weakest??" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "confession", openingStyle: "self",
    tags: ["fear", "phobia", "weird", "specific"],
  },

  {
    id: "funny-005",
    category: "funny",
    title: "Loud Whisperer Edition",
    mainPrompt: "Who's the absolute worst at whispering when the group's trying to gossip in public?",
    reveals: [
      { label: "Follow-up", text: "Have they ever actually gotten you caught?" },
      { label: "Roast Bait", text: "Who here whispers like they're wearing a megaphone?" },
    ],
    entryIntensity: 2, finalIntensity: 2, risk: "low", type: "opinion", openingStyle: "group-callout",
    tags: ["group", "gossip", "public", "chaos"],
  },

  {
    id: "funny-006",
    category: "funny",
    title: "The Late One Edition",
    mainPrompt: "Who's the person in this group who's never on time — and somehow never gets dragged for it?",
    reveals: [
      { label: "Follow-up", text: "Do they actually have good excuses… or just creative ones?" },
      { label: "Roast Bait", text: "Who here thinks 'I'm on my way' means 'I just woke up'?" },
    ],
    entryIntensity: 2, finalIntensity: 2, risk: "low", type: "opinion", openingStyle: "group-callout",
    tags: ["friends", "lateness", "group dynamics"],
  },

  {
    id: "funny-001",
    category: "funny",
    title: "Bad Memory Lane Edition",
    mainPrompt: "What's a story your friends will never let you escape from?",
    reveals: [
      { label: "Follow-up", text: "Have you owned it — or are you still trying to rewrite history?" },
      { label: "Roast Bait", text: "Who clearly gave the group their favorite storytime?" },
    ],
    entryIntensity: 1, finalIntensity: 2, risk: "low", type: "story", openingStyle: "story",
    tags: ["friends", "embarrassing", "group memory"],
  },

  {
    id: "funny-010",
    category: "funny",
    title: "Animal Instincts Edition",
    mainPrompt: "What's an animal you irrationally believe you could fight and win?",
    reveals: [
      { label: "Follow-up", text: "What would it actually take for you to test this theory?" },
      { label: "Roast Bait", text: "Who here is definitely losing a fight to a goose?" },
    ],
    entryIntensity: 1, finalIntensity: 2, risk: "low", type: "opinion", openingStyle: "story",
    tags: ["animals", "chaos", "delusion"],
  },

  {
    id: "funny-040",
    category: "funny",
    title: "Family Secrets Edition",
    mainPrompt: "What's something your family does that you thought was normal — until you told someone else?",
    reveals: [
      { label: "Follow-up", text: "How did they react when you told them?" },
      { label: "Roast Bait", text: "Whose family here deserves a documentary?" },
    ],
    entryIntensity: 1, finalIntensity: 2, risk: "low", type: "story", openingStyle: "story",
    tags: ["family", "weird", "normal", "story"],
  },

  {
    id: "funny-041",
    category: "funny",
    title: "Delusional Dreams Edition",
    mainPrompt: "What's something you seriously thought you'd be famous for as a kid?",
    reveals: [
      { label: "Follow-up", text: "When did the dream die — or are you still holding on?" },
      { label: "Roast Bait", text: "Who here is still mentally in their Disney Channel audition era?" },
    ],
    entryIntensity: 1, finalIntensity: 2, risk: "low", type: "story", openingStyle: "self",
    tags: ["childhood", "dreams", "delusion", "fame"],
  },

  {
    id: "funny-044",
    category: "funny",
    title: "Snack Sabotage Edition",
    mainPrompt: "What's the most shameless thing you've eaten… that wasn't yours?",
    reveals: [
      { label: "Follow-up", text: "Did you ever confess — or blame someone else?" },
      { label: "Roast Bait", text: "Who here is permanently banned from other people's fridges?" },
    ],
    entryIntensity: 1, finalIntensity: 2, risk: "low", type: "story", openingStyle: "story",
    tags: ["food", "stealing", "shameless", "funny"],
  },

  {
    id: "funny-046",
    category: "funny",
    title: "Dumb Injury Edition",
    mainPrompt: "What's the most ridiculous way you've ever hurt yourself?",
    reveals: [
      { label: "Follow-up", text: "Did it stop there — or did you make it worse trying to fix it?" },
      { label: "Roast Bait", text: "Who here survives the shortest in the wild?" },
    ],
    entryIntensity: 1, finalIntensity: 2, risk: "low", type: "story", openingStyle: "story",
    tags: ["injury", "clumsy", "story", "funny"],
  },

  {
    id: "funny-051",
    category: "funny",
    title: "Food Crimes Edition",
    mainPrompt: "What's the most chaotic food combo you genuinely enjoy?",
    reveals: [
      { label: "Follow-up", text: "Did someone introduce you to it — or did you create this monstrosity yourself?" },
      { label: "Roast Bait", text: "Who here deserves a lifetime ban from the kitchen?" },
    ],
    entryIntensity: 1, finalIntensity: 2, risk: "low", type: "opinion", openingStyle: "self",
    tags: ["food", "taste", "chaos", "kitchen"],
  },

  {
    id: "funny-058",
    category: "funny",
    title: "Chaotic Talent Show Edition",
    mainPrompt: "What's your weirdest hidden talent — the one that always gets a reaction?",
    reveals: [
      { label: "Follow-up", text: "Is it actually impressive… or just concerning?" },
      { label: "Roast Bait", text: "Who here has been waiting their whole life for this question?" },
    ],
    entryIntensity: 1, finalIntensity: 2, risk: "low", type: "confession", openingStyle: "self",
    tags: ["talent", "party trick", "weird", "attention"],
  },

  {
    id: "funny-063",
    category: "funny",
    title: "Kitchen Catastrophe Edition",
    mainPrompt: "What's the dumbest thing you've ever done while trying to cook?",
    reveals: [
      { label: "Follow-up", text: "Did you suffer alone — or convince someone else to try it too?" },
      { label: "Roast Bait", text: "Who here needs a permanent kitchen ban?" },
    ],
    entryIntensity: 1, finalIntensity: 2, risk: "low", type: "story", openingStyle: "story",
    tags: ["cooking", "kitchen", "failure", "food"],
  },

  {
    id: "funny-066",
    category: "funny",
    title: "Animal Instinct Edition",
    mainPrompt: "If you got turned into an animal for a week — what chaos would you cause?",
    reveals: [
      { label: "Roast Bait", text: "Who here already acts feral and doesn't need the transformation?" },
    ],
    entryIntensity: 2, finalIntensity: 2, risk: "low", type: "choice", openingStyle: "hypothetical",
    tags: ["animals", "hypothetical", "chaos", "feral"],
  },

  {
    id: "funny-068",
    category: "funny",
    title: "Money Chaos Edition",
    mainPrompt: "You just got handed $1,000,000 — no strings. What's the first thing you're spending it on?",
    reveals: [
      { label: "Follow-up", text: "Be honest — is it responsible, chaotic, or both?" },
    ],
    entryIntensity: 1, finalIntensity: 2, risk: "low", type: "choice", openingStyle: "hypothetical",
    tags: ["money", "hypothetical", "chaos", "fun"],
  },
  // ─── DEBATE ───────────────────────────────────────────────────────────────────

  {
    id: "debate-001",
    category: "debate",
    title: "First Date Money Edition",
    mainPrompt: "Who should pay on the first date?",
    reveals: [
      { label: "Follow-up", text: "Does your answer change depending on who asked who out?" },
      { label: "Dig Deeper", text: "Is your answer about fairness, tradition, attraction… or ego?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["dating", "money", "values"],
  },

  {
    id: "debate-002",
    category: "debate",
    title: "Pineapple Verdict Edition",
    mainPrompt: "Is pineapple on pizza actually a crime?",
    reveals: [
      { label: "Follow-up", text: "Is food about taste… or identity? Any examples?" },
    ],
    entryIntensity: 1, finalIntensity: 2, risk: "low", type: "debate", openingStyle: "opinion",
    tags: ["food", "hot take", "polarizing"],
  },

  {
    id: "debate-003",
    category: "debate",
    title: "Love Is A Choice Edition",
    mainPrompt: "Is love a choice — or a feeling?",
    reveals: [
      { label: "Follow-up", text: "If love is a choice, does falling out of love make it a choice too?" },
      { label: "Dig Deeper", text: "If love fades, are you supposed to chase it… or let it go?" },
    ],
    entryIntensity: 2, finalIntensity: 4, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["love", "relationships", "philosophy"],
  },

  {
    id: "debate-004",
    category: "debate",
    title: "Splitting the Bill Edition",
    mainPrompt: "If they insisted on splitting the bill on a first date — green flag or dealbreaker?",
    reveals: [
      { label: "Follow-up", text: "What if they only offered after seeing the total?" },
      { label: "Dig Deeper", text: "If you paid for everything… would you expect something back?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["dating", "money", "values"],
  },

  {
    id: "debate-005",
    category: "debate",
    title: "Body Count Edition",
    mainPrompt: "Why do people still care about body count — and is it even fair?",
    reveals: [
      { label: "Follow-up", text: "Does gender change your answer?" },
      { label: "Dig Deeper", text: "Would you actually judge someone for theirs?" },
    ],
    entryIntensity: 3, finalIntensity: 5, risk: "high", type: "debate", openingStyle: "opinion",
    tags: ["dating", "sexuality", "double standard"],
  },

  {
    id: "debate-006",
    category: "debate",
    title: "Opposite Gender Besties Edition",
    mainPrompt: "Can people in relationships have close best friends of the opposite gender?",
    reveals: [
      { label: "Follow-up", text: "Is trust enough — or are there limits?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["relationships", "trust", "friendships"],
  },

  {
    id: "debate-007",
    category: "debate",
    title: "Phone Addiction Edition",
    mainPrompt: "Is our phone addiction just the new normal — or a legit crisis?",
    reveals: [
      { label: "Follow-up", text: "Could you actually survive one week without your phone?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "debate", openingStyle: "opinion",
    tags: ["technology", "phones", "addiction"],
  },

  {
    id: "debate-008",
    category: "debate",
    title: "School System Edition",
    mainPrompt: "Is school more about learning — or surviving the system?",
    reveals: [
      { label: "Follow-up", text: "What should school actually teach that it doesn't?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "debate", openingStyle: "opinion",
    tags: ["education", "school", "system"],
  },

  {
    id: "debate-009",
    category: "debate",
    title: "Early Risers vs Night Owls Edition",
    mainPrompt: "Who actually has it worse — early risers or night owls?",
    reveals: [
      { label: "Follow-up", text: "Is your schedule a choice — or just how you're wired?" },
    ],
    entryIntensity: 1, finalIntensity: 2, risk: "low", type: "debate", openingStyle: "opinion",
    tags: ["lifestyle", "sleep", "routine"],
  },

  {
    id: "debate-010",
    category: "debate",
    title: "Mindset vs Circumstances Edition",
    mainPrompt: "Is success more about mindset — or circumstances?",
    reveals: [
      { label: "Follow-up", text: "What's a barrier you've faced that mindset alone couldn't fix?" },
    ],
    entryIntensity: 2, finalIntensity: 4, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["success", "privilege", "mindset"],
  },

  {
    id: "debate-011",
    category: "debate",
    title: "Too Sensitive Edition",
    mainPrompt: "Are people today too sensitive — or just finally setting boundaries?",
    reveals: [
      { label: "Follow-up", text: "What's something you used to laugh at… that you'd avoid now?" },
      { label: "Dig Deeper", text: "Have we become more respectful — or just scared of getting cancelled?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["culture", "sensitivity", "cancel culture"],
  },

  {
    id: "debate-012",
    category: "debate",
    title: "Childhood Nostalgia Edition",
    mainPrompt: "Was childhood actually better — or do we just miss being young?",
    reveals: [
      { label: "Follow-up", text: "Do kids today have it easier or harder?" },
    ],
    entryIntensity: 1, finalIntensity: 2, risk: "low", type: "debate", openingStyle: "opinion",
    tags: ["childhood", "nostalgia", "growing up"],
  },

  {
    id: "debate-013",
    category: "debate",
    title: "Rules vs Freedom Edition",
    mainPrompt: "Do rules protect freedom — or restrict it?",
    reveals: [
      { label: "Follow-up", text: "Where's the line between structure and control?" },
      { label: "Dig Deeper", text: "Would you feel safer with more rules — or fewer?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["freedom", "control", "society"],
  },

  {
    id: "debate-014",
    category: "debate",
    title: "Do People Change Edition",
    mainPrompt: "Do people really change — or just learn to hide things better?",
    reveals: [
      { label: "Follow-up", text: "What's something you've changed… that people still doubt?" },
    ],
    entryIntensity: 2, finalIntensity: 4, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["growth", "change", "trust"],
  },

  {
    id: "debate-015",
    category: "debate",
    title: "Honest vs Kind Edition",
    mainPrompt: "Is it better to be honest — or kind?",
    reveals: [
      { label: "Follow-up", text: "Can you be too nice for your own good?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "debate", openingStyle: "opinion",
    tags: ["honesty", "kindness", "values"],
  },

  {
    id: "debate-016",
    category: "debate",
    title: "Confident vs Cocky Edition",
    mainPrompt: "Where's the line between confident and cocky?",
    reveals: [
      { label: "Follow-up", text: "Can you call someone out for it — or does that just make you a hater?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["confidence", "ego", "social"],
  },

  {
    id: "debate-017",
    category: "debate",
    title: "Lying Edition",
    mainPrompt: "Is lying always wrong — or are some lies harmless?",
    reveals: [
      { label: "Follow-up", text: "Is honesty more about timing… or truth?" },
      { label: "Dig Deeper", text: "What's one lie you think actually helped someone?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["lying", "honesty", "ethics"],
  },

  {
    id: "debate-018",
    category: "debate",
    title: "Second Chances Edition",
    mainPrompt: "Do people actually deserve second chances?",
    reveals: [
      { label: "Follow-up", text: "What's something you could never forgive?" },
    ],
    entryIntensity: 2, finalIntensity: 4, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["forgiveness", "trust", "relationships"],
  },

  {
    id: "debate-019",
    category: "debate",
    title: "Identity Edition",
    mainPrompt: "Are we defined more by how we see ourselves — or how others see us?",
    reveals: [
      { label: "Follow-up", text: "Has anyone ever completely misread you… and were they wrong?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "debate", openingStyle: "opinion",
    tags: ["identity", "perception", "self-image"],
  },

  {
    id: "debate-020",
    category: "debate",
    title: "Too Old Edition",
    mainPrompt: "Is there actually such a thing as being too old to chase a dream?",
    reveals: [
      { label: "Follow-up", text: "What's something you've convinced yourself you missed the window for?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "debate", openingStyle: "opinion",
    tags: ["dreams", "age", "ambition"],
  },

  {
    id: "debate-021",
    category: "debate",
    title: "Filters Edition",
    mainPrompt: "Are social media filters harmless fun — or quietly destroying self-image?",
    reveals: [
      { label: "Follow-up", text: "Would you post a photo of yourself with zero edits?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["social media", "filters", "self-image"],
  },

  {
    id: "debate-022",
    category: "debate",
    title: "Legacy vs Peace Edition",
    mainPrompt: "Would you rather be remembered forever — or live a quiet, peaceful life?",
    reveals: [
      { label: "Follow-up", text: "Is legacy ever worth the stress?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "debate", openingStyle: "opinion",
    tags: ["legacy", "peace", "ambition"],
  },

  {
    id: "debate-023",
    category: "debate",
    title: "Loud People Edition",
    mainPrompt: "Do louder people actually get ahead — or just get noticed?",
    reveals: [
      { label: "Follow-up", text: "Is confidence earned… or performed?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "debate", openingStyle: "opinion",
    tags: ["confidence", "social dynamics", "success"],
  },

  {
    id: "debate-024",
    category: "debate",
    title: "Age & Wisdom Edition",
    mainPrompt: "Does age automatically come with wisdom?",
    reveals: [
      { label: "Follow-up", text: "What's something young people understand better than adults?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "debate", openingStyle: "opinion",
    tags: ["age", "wisdom", "generational"],
  },

  {
    id: "debate-025",
    category: "debate",
    title: "Phone at the Table Edition",
    mainPrompt: "Is it rude to be on your phone during a hangout — or is that just how we are now?",
    reveals: [
      { label: "Follow-up", text: "What do you really think of someone who's always on their phone around you?" },
    ],
    entryIntensity: 1, finalIntensity: 2, risk: "low", type: "debate", openingStyle: "opinion",
    tags: ["phones", "etiquette", "social"],
  },

  {
    id: "debate-026",
    category: "debate",
    title: "AI Art Edition",
    mainPrompt: "Should AI-generated art be considered real art?",
    reveals: [
      { label: "Follow-up", text: "If the result moves you… does the source matter?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "debate", openingStyle: "opinion",
    tags: ["AI", "art", "creativity"],
  },

  {
    id: "debate-027",
    category: "debate",
    title: "AI Life or Death Edition",
    mainPrompt: "Should AI ever be allowed to make life-or-death decisions?",
    reveals: [
      { label: "Follow-up", text: "Who do you trust more — a biased human or a robot without empathy?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["AI", "ethics", "technology"],
  },

  {
    id: "debate-028",
    category: "debate",
    title: "Digital Afterlife Edition",
    mainPrompt: "Should we be able to create digital versions of people after they die?",
    reveals: [
      { label: "Follow-up", text: "Would it bring closure… or mess with grief?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["death", "AI", "grief"],
  },

  {
    id: "debate-029",
    category: "debate",
    title: "Cultural Appreciation Edition",
    mainPrompt: "What's the line between cultural appreciation and appropriation?",
    reveals: [
      { label: "Follow-up", text: "Who actually gets to draw that line?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "high", type: "debate", openingStyle: "opinion",
    tags: ["culture", "appropriation", "identity"],
  },

  {
    id: "debate-030",
    category: "debate",
    title: "Name & Identity Edition",
    mainPrompt: "Should people adapt their names for others — or expect others to learn them?",
    reveals: [
      { label: "Follow-up", text: "Have you ever changed something about yourself just to fit in?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["identity", "name", "belonging"],
  },

  {
    id: "debate-031",
    category: "debate",
    title: "Respect Edition",
    mainPrompt: "Should respect be automatic — or earned, even with age?",
    reveals: [
      { label: "Follow-up", text: "Have you ever had to unlearn something an adult taught you?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["respect", "age", "authority"],
  },

  {
    id: "debate-032",
    category: "debate",
    title: "Family Loyalty Edition",
    mainPrompt: "Should family loyalty come before personal peace?",
    reveals: [
      { label: "Follow-up", text: "What's something you'd never tolerate — even from blood?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "high", type: "debate", openingStyle: "opinion",
    tags: ["family", "loyalty", "boundaries"],
  },

  {
    id: "debate-033",
    category: "debate",
    title: "Judging by Appearance Edition",
    mainPrompt: "Is it fair to judge someone by how they dress, speak, or carry themselves?",
    reveals: [
      { label: "Follow-up", text: "Have you ever changed your look just to be taken seriously?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["appearance", "judgment", "identity"],
  },

  {
    id: "debate-034",
    category: "debate",
    title: "Virginity as Milestone Edition",
    mainPrompt: "Why is virginity still treated like a milestone — and who actually benefits from that?",
    reveals: [
      { label: "Follow-up", text: "What's a better way to measure personal growth?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "debate", openingStyle: "opinion",
    tags: ["sexuality", "double standard", "society"],
  },

  {
    id: "debate-035",
    category: "debate",
    title: "Men Crying Edition",
    mainPrompt: "Is it still taboo for men to cry — or are things actually changing?",
    reveals: [
      { label: "Follow-up", text: "When's the last time you saw someone break that stereotype?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["masculinity", "emotions", "stereotypes"],
  },

  {
    id: "debate-036",
    category: "debate",
    title: "Double Standard Edition",
    mainPrompt: "Why is being a virgin praised in women… but mocked in men?",
    reveals: [
      { label: "Follow-up", text: "Who actually benefits from that pressure?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "debate", openingStyle: "opinion",
    tags: ["double standard", "gender", "sexuality"],
  },

  {
    id: "debate-037",
    category: "debate",
    title: "AI Artists Edition",
    mainPrompt: "Should AI be allowed to replace artists?",
    reveals: [
      { label: "Follow-up", text: "If the art moves you… does it matter who made it?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "debate", openingStyle: "opinion",
    tags: ["AI", "art", "jobs"],
  },

  {
    id: "debate-038",
    category: "debate",
    title: "Living Forever Edition",
    mainPrompt: "If you could upload your mind into a computer and live forever — would you?",
    reveals: [
      { label: "Follow-up", text: "Is living forever even really living?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "debate", openingStyle: "hypothetical",
    tags: ["immortality", "technology", "philosophy"],
  },

  {
    id: "debate-039",
    category: "debate",
    title: "Marriage Edition",
    mainPrompt: "Should marriage still be the goal — or is it outdated?",
    reveals: [
      { label: "Follow-up", text: "What would a modern version of commitment actually look like?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["marriage", "relationships", "society"],
  },

  {
    id: "debate-040",
    category: "debate",
    title: "Beauty Standards Edition",
    mainPrompt: "Are beauty standards evolving — or just rebranding?",
    reveals: [
      { label: "Follow-up", text: "Who's actually setting the standard now?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["beauty", "standards", "social media"],
  },

  {
    id: "debate-041",
    category: "debate",
    title: "Same 24 Hours Edition",
    mainPrompt: "Do you actually believe everyone has the same 24 hours?",
    reveals: [
      { label: "Follow-up", text: "What's something people conveniently ignore about privilege?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["privilege", "success", "time"],
  },

  {
    id: "debate-042",
    category: "debate",
    title: "Educating Others Edition",
    mainPrompt: "Is it your responsibility to educate someone who's ignorant?",
    reveals: [
      { label: "Follow-up", text: "Where's the line between patience… and protecting your peace?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["education", "boundaries", "social"],
  },
{
    id: "debate-044",
    category: "debate",
    title: "Stereotype Truth Edition",
    mainPrompt: "Do stereotypes exist because there's some truth to them — or do they just create the behavior they describe?",
    reveals: [
      { label: "Follow-up", text: "Name a stereotype about your own group?" },
      { label: "Dig Deeper", text: "Is it ever okay to act on one… or never?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "high", type: "debate", openingStyle: "opinion",
    tags: ["stereotypes", "race", "culture", "bias"],
  },
  // ─── UNHINGED ─────────────────────────────────────────────────────────────────

  {
    id: "unhinged-001",
    category: "unhinged",
    title: "Certified Hater Edition",
    mainPrompt: "Who here is lowkey the hater of the group?",
    reveals: [
      { label: "Follow-up", text: "Are they brutally honest… or just built for negativity?" },
      { label: "Roast Bait", text: "Who wakes up every day ready to boo someone's dreams?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "opinion", openingStyle: "group-callout",
    tags: ["hater", "group", "callout", "energy"],
  },

  {
    id: "unhinged-002",
    category: "unhinged",
    title: "Group Betrayal Edition",
    mainPrompt: "If this group had to vote someone off the island… who's going first?",
    reveals: [
      { label: "Follow-up", text: "Be honest — is it personal, or just strategy?" },
      { label: "Roast Bait", text: "Who here's one eye-roll away from getting blindsided?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "opinion", openingStyle: "group-callout",
    tags: ["betrayal", "group", "callout", "chaos"],
  },

  {
    id: "unhinged-003",
    category: "unhinged",
    title: "Cheating Edition",
    mainPrompt: "What's the dirtiest thing you've done with someone else's partner?",
    reveals: [
      { label: "Tactical Silence", text: "Or are they still sleeping beside them right now?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["cheating", "betrayal", "confession"],
  },

  {
    id: "unhinged-004",
    category: "unhinged",
    title: "Revenge Hook-Up Edition",
    mainPrompt: "Who'd you hook up with purely out of revenge?",
    reveals: [
      { label: "Follow-up", text: "Did they deserve it — or did you just need to feel powerful?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["revenge", "hookup", "power"],
  },

  {
    id: "unhinged-005",
    category: "unhinged",
    title: "Side Piece Edition",
    mainPrompt: "Have you ever been the side piece?",
    reveals: [
      { label: "Follow-up", text: "Be honest… did you play your role a little too well?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["cheating", "side piece", "confession"],
  },

  {
    id: "unhinged-006",
    category: "unhinged",
    title: "Emotional Cheating Edition",
    mainPrompt: "Have you ever emotionally cheated — just to feel something?",
    reveals: [
      { label: "Follow-up", text: "Did they ever notice — or were they too busy loving you?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["emotional cheating", "relationships", "confession"],
  },

  {
    id: "unhinged-007",
    category: "unhinged",
    title: "Villain Energy Edition",
    mainPrompt: "What's the meanest thing you've done to someone who didn't deserve it — and do you actually feel bad?",
    reveals: [
      { label: "Follow-up", text: "Or did it secretly feel amazing?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["mean", "guilt", "villain", "confession"],
  },

  {
    id: "unhinged-008",
    category: "unhinged",
    title: "Fake Friend Edition",
    mainPrompt: "Who's someone you smile at like a friend… but secretly can't stand?",
    reveals: [
      { label: "Follow-up", text: "Have you done something to make their life harder?" },
      { label: "Roast Bait", text: "Do they still think you're besties?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "high", type: "confession", openingStyle: "self",
    tags: ["fake", "friendship", "secret", "two-faced"],
  },

  {
    id: "unhinged-009",
    category: "unhinged",
    title: "Dark Thought Edition",
    mainPrompt: "What's something awful you thought about someone close to you… but never said out loud?",
    reveals: [
      { label: "Follow-up", text: "Say it now — or admit you're the faker of the group." },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["dark thoughts", "confession", "brutal"],
  },

  {
    id: "unhinged-010",
    category: "unhinged",
    title: "Emotional Wreck Edition",
    mainPrompt: "Who's someone you emotionally wrecked — but still blame for how it ended?",
    reveals: [
      { label: "Follow-up", text: "Would you apologize now… or do you still think they had it coming?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["manipulation", "relationships", "blame"],
  },

  {
    id: "unhinged-011",
    category: "unhinged",
    title: "Pure Spite Edition",
    mainPrompt: "What's something you did purely out of spite — not to win, just to make sure they lost?",
    reveals: [
      { label: "Follow-up", text: "Did it destroy them — or just make you look insane?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["spite", "revenge", "chaos"],
  },

  {
    id: "unhinged-012",
    category: "unhinged",
    title: "Zero Remorse Edition",
    mainPrompt: "What's something awful you did that made you feel absolutely nothing?",
    reveals: [
      { label: "Follow-up", text: "Are you still that version of you… or worse now?" },
    ],
    entryIntensity: 5, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["remorse", "dark", "confession", "villain"],
  },

  {
    id: "unhinged-013",
    category: "unhinged",
    title: "Out of Pocket Edition",
    mainPrompt: "What's the most out-of-pocket thing you've done during sex — and did it haunt you after?",
    reveals: [
      { label: "Follow-up", text: "Did you ever tell anyone… or are we the first?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["sex", "chaos", "confession", "unhinged"],
  },

  {
    id: "unhinged-014",
    category: "unhinged",
    title: "Disgusting But Hot Edition",
    mainPrompt: "What's the most disgusting thing you've done that secretly turned you on?",
    reveals: [
      { label: "Follow-up", text: "Would you do it again sober?" },
    ],
    entryIntensity: 5, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["sex", "confession", "unhinged", "chaos"],
  },

  {
    id: "unhinged-015",
    category: "unhinged",
    title: "Used For a Point Edition",
    mainPrompt: "Have you ever hooked up with someone just to prove a point?",
    reveals: [
      { label: "Follow-up", text: "Did they even know they were being used?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["sex", "power", "manipulation", "hookup"],
  },

  {
    id: "unhinged-016",
    category: "unhinged",
    title: "Secret Hook-Up Edition",
    mainPrompt: "Are you hooking up with someone you'd never admit to?",
    reveals: [
      { label: "Follow-up", text: "Is it because of how they look — or what they know?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["secret", "hookup", "confession"],
  },

  {
    id: "unhinged-017",
    category: "unhinged",
    title: "Manipulation Masterclass Edition",
    mainPrompt: "What's the most manipulative thing you've done — and lowkey felt proud of?",
    reveals: [
      { label: "Follow-up", text: "Did they ever find out?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["manipulation", "power", "confession"],
  },

  

  {
    id: "unhinged-019",
    category: "unhinged",
    title: "Wrong But Genius Edition",
    mainPrompt: "What's a twisted move you pulled that was wrong… but honestly? Genius.",
    reveals: [
      { label: "Follow-up", text: "Would you teach a masterclass on it?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["manipulation", "genius", "chaos", "villain"],
  },

  {
    id: "unhinged-020",
    category: "unhinged",
    title: "Criminal Energy Edition",
    mainPrompt: "What's a crime you'd commit today if you knew you'd get away with it — and no, not robbing a bank.",
    reveals: [
      { label: "Follow-up", text: "Are you lowkey already planning it?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "hypothetical",
    tags: ["crime", "chaos", "hypothetical"],
  },

  {
    id: "unhinged-021",
    category: "unhinged",
    title: "Technically Legal Edition",
    mainPrompt: "What's something you did that felt illegal… but technically wasn't?",
    reveals: [
      { label: "Follow-up", text: "Okay. Now what did you do that actually was illegal?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["illegal", "chaos", "confession"],
  },

  {
    id: "unhinged-022",
    category: "unhinged",
    title: "Down Bad Edition",
    mainPrompt: "What's the most shameless thing you've done when you were down bad?",
    reveals: [
      { label: "Follow-up", text: "Did it get you what you wanted… or just mess you up worse?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["shameless", "desperation", "chaos"],
  },

  {
    id: "unhinged-023",
    category: "unhinged",
    title: "You Need Therapy Edition",
    mainPrompt: "What's something you've done that screams 'you need therapy'?",
    reveals: [
      { label: "Roast Bait", text: "Who here would probably cheer you on for it?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["therapy", "chaos", "unhinged", "confession"],
  },


  {
    id: "unhinged-026",
    category: "unhinged",
    title: "Racist Upbringing Edition",
    mainPrompt: "What's something lowkey racist you heard growing up that you didn't question… until later?",
    reveals: [
      { label: "Follow-up", text: "What's the most racist thing you believed or heard?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["racism", "upbringing", "reflection"],
  },

  {
    id: "unhinged-027",
    category: "unhinged",
    title: "Caught Being Racist Edition",
    mainPrompt: "What's a moment you realised… you were being racist?",
    reveals: [
      { label: "Follow-up", text: "Did you own it — or hide behind the 'I didn't mean it' defence?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["racism", "accountability", "confession"],
  },

  {
    id: "unhinged-028",
    category: "unhinged",
    title: "Racist Joke Edition",
    mainPrompt: "What's the wildest time someone said something racist and tried to pass it off as a joke?",
    reveals: [
      { label: "Follow-up", text: "Did you check them… or just let it slide?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "story", openingStyle: "story",
    tags: ["racism", "jokes", "social"],
  },

  {
    id: "unhinged-029",
    category: "unhinged",
    title: "Stayed Silent Edition",
    mainPrompt: "What's the most racist thing someone's said in front of you — and you didn't call it out?",
    reveals: [
      { label: "Follow-up", text: "Why didn't you say anything?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["racism", "silence", "accountability"],
  },

  {
    id: "unhinged-030",
    category: "unhinged",
    title: "Secret Situation Edition",
    mainPrompt: "Is there someone in your life who thinks you're exclusive — and are they wrong?",
    reveals: [
      { label: "Tactical Silence", text: "Don't explain. Let the guilt speak." },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["cheating", "guilt", "confession"],
  },

  {
    id: "unhinged-031",
    category: "unhinged",
    title: "Obsession Edition",
    mainPrompt: "Have you ever been obsessed with someone to the point it got creepy — and what did you actually do?",
    reveals: [
      { label: "Follow-up", text: "If they found out… what would they say?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["obsession", "creepy", "confession"],
  },

  {
    id: "unhinged-032",
    category: "unhinged",
    title: "Secret Dislike Edition",
    mainPrompt: "Is there someone close to you that you secretly can't stand — and why?",
    reveals: [
      { label: "Roast Bait", text: "Are they in this room?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "high", type: "confession", openingStyle: "self",
    tags: ["secret", "dislike", "group", "confession"],
  },

  {
    id: "unhinged-033",
    category: "unhinged",
    title: "Eating Edition",
    mainPrompt: "When's the last time you ate 🐱 — and how was it?",
    reveals: [
      { label: "Follow-up", text: "Did you eat it from the back?" },
    ],
    entryIntensity: 5, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["sex", "filthy", "unhinged"],
  },

  {
    id: "unhinged-034",
    category: "unhinged",
    title: "Nastiest in the Room Edition",
    mainPrompt: "Who here do you genuinely think is the nastiest — and what makes you so sure?",
    reveals: [
      { label: "Confession", text: "Would you want to find out?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "opinion", openingStyle: "group-callout",
    tags: ["sex", "group", "callout", "filthy"],
  },

  {
    id: "unhinged-035",
    category: "unhinged",
    title: "Wrong Place Edition",
    mainPrompt: "Have you ever had sex somewhere you definitely weren't supposed to? Where?",
    reveals: [
      { label: "Tactical Silence", text: "No words. Just chaos." },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["sex", "location", "chaos", "unhinged"],
  },

  {
    id: "unhinged-036",
    category: "unhinged",
    title: "Surprised Yourself Edition",
    mainPrompt: "What's something freaky you did that surprised even you?",
    reveals: [
      { label: "Roast Bait", text: "Would you do it again — or was that your villain arc?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["sex", "surprise", "villain", "unhinged"],
  },

  {
    id: "unhinged-037",
    category: "unhinged",
    title: "Instant Regret Edition",
    mainPrompt: "Have you ever finished… and instantly regretted everything?",
    reveals: [
      { label: "Follow-up", text: "Was it them — or you?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["sex", "regret", "confession"],
  },

  {
    id: "unhinged-038",
    category: "unhinged",
    title: "Whispered Something Messed Up Edition",
    mainPrompt: "What's the most messed-up thing you've whispered during sex?",
    reveals: [
      { label: "Tactical Silence", text: "Don't say more. Let the image live." },
    ],
    entryIntensity: 5, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["sex", "filthy", "chaos", "unhinged"],
  },

  {
    id: "unhinged-039",
    category: "unhinged",
    title: "Secret Kink Edition",
    mainPrompt: "What's a kink you're lowkey embarrassed to admit turns you on?",
    reveals: [],
    entryIntensity: 5, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["sex", "kink", "confession", "unhinged"],
  },

  {
    id: "unhinged-040",
    category: "unhinged",
    title: "Body Not Soul Edition",
    mainPrompt: "Ever stayed with someone just because the sex was that good — even though they were trash otherwise?",
    reveals: [
      { label: "Follow-up", text: "Did they ever know… they were just body, not soul?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["sex", "relationships", "confession"],
  },

  {
    id: "unhinged-041",
    category: "unhinged",
    title: "Nasty DM Edition",
    mainPrompt: "What's the nastiest DM you've ever sent or received — and did it work?",
    reveals: [
      { label: "Follow-up", text: "Would you copy-paste it again?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["sex", "DMs", "chaos", "unhinged"],
  },

  

  {
    id: "unhinged-043",
    category: "unhinged",
    title: "Hiding the Nasty Edition",
    mainPrompt: "Who here is 100% hiding how nasty they really are — and how do you know?",
    reveals: [
      { label: "Roast Bait", text: "Share the proof." },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "high", type: "opinion", openingStyle: "group-callout",
    tags: ["secret", "nasty", "group", "callout"],
  },

  {
    id: "unhinged-044",
    category: "unhinged",
    title: "Acts Innocent Edition",
    mainPrompt: "Who here acts innocent… but absolutely isn't?",
    reveals: [
      { label: "Roast Bait", text: "Who's the worst actor in the room?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "opinion", openingStyle: "group-callout",
    tags: ["innocent", "fake", "group", "callout"],
  },

  {
    id: "unhinged-045",
    category: "unhinged",
    title: "Secret Life Edition",
    mainPrompt: "If someone in this room had a whole secret life — who would it be?",
    reveals: [
      { label: "Tactical Silence", text: "Let the tension do the work." },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "opinion", openingStyle: "group-callout",
    tags: ["secret", "group", "tension", "callout"],
  },

  {
    id: "unhinged-046",
    category: "unhinged",
    title: "Most Likely to Cheat Edition",
    mainPrompt: "Who here is most likely to cheat — but would never admit it?",
    reveals: [
      { label: "Point Finger", text: "Don't hesitate. You've thought about this before." },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "opinion", openingStyle: "group-callout",
    tags: ["cheating", "group", "callout", "tension"],
  },

  {
    id: "unhinged-047",
    category: "unhinged",
    title: "Snake but Sexy Edition",
    mainPrompt: "Who do you trust the least around your partner or situationship?",
    reveals: [
      { label: "Point Finger", text: "Who gives 'snake but sexy' energy?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "opinion", openingStyle: "group-callout",
    tags: ["trust", "snake", "group", "callout"],
  },

  {
    id: "unhinged-048",
    category: "unhinged",
    title: "Sweetheart Menace Edition",
    mainPrompt: "Who here is a sweetheart in public… and a menace behind closed doors?",
    reveals: [
      { label: "Roast Bait", text: "What's your evidence? Receipts, please." },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "opinion", openingStyle: "group-callout",
    tags: ["double life", "group", "callout", "chaos"],
  },

  {
    id: "unhinged-049",
    category: "unhinged",
    title: "Lie Detector Edition",
    mainPrompt: "If everyone here had to take a lie detector test — who breaks first?",
    reveals: [
      { label: "Tactical Silence", text: "Let the eyes do the work." },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "opinion", openingStyle: "group-callout",
    tags: ["lies", "group", "tension", "callout"],
  },

  {
    id: "unhinged-050",
    category: "unhinged",
    title: "Snitch or Grave Edition",
    mainPrompt: "Who here would snitch if things got messy — and who would take it to the grave?",
    reveals: [
      { label: "Point Finger", text: "Pick one of each — no fence-sitting." },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "opinion", openingStyle: "group-callout",
    tags: ["snitch", "loyalty", "group", "callout"],
  },

  {
    id: "unhinged-051",
    category: "unhinged",
    title: "Main Character Syndrome Edition",
    mainPrompt: "Who here has main character syndrome — but is definitely not the main character?",
    reveals: [
      { label: "Tactical Silence", text: "You already know the answer." },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "opinion", openingStyle: "group-callout",
    tags: ["main character", "ego", "group", "callout"],
  },

  {
    id: "unhinged-052",
    category: "unhinged",
    title: "Group Chat Betrayal Edition",
    mainPrompt: "Who here would betray the group chat for the right person?",
    reveals: [
      { label: "Follow-up", text: "And who's the 'right person' you think they'd fold for?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "opinion", openingStyle: "group-callout",
    tags: ["betrayal", "group chat", "loyalty", "callout"],
  },

  {
    id: "unhinged-054",
    category: "unhinged",
    title: "Lying About Sex Life Edition",
    mainPrompt: "If someone in this room is lying about their sex life — who is it?",
    reveals: [
      { label: "Roast Bait", text: "Say it like you've seen the receipts." },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "opinion", openingStyle: "group-callout",
    tags: ["sex", "lying", "group", "callout"],
  },

  {
    id: "unhinged-055",
    category: "unhinged",
    title: "Shocked but Started It Edition",
    mainPrompt: "Who here would act shocked at drama they definitely started?",
    reveals: [
      { label: "Roast Bait", text: "Reenact the moment — with receipts." },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "opinion", openingStyle: "group-callout",
    tags: ["drama", "fake", "group", "callout"],
  },

  {
    id: "unhinged-056",
    category: "unhinged",
    title: "Suspiciously Quiet Edition",
    mainPrompt: "Who's been suspiciously quiet this whole game… and it's starting to make you wonder?",
    reveals: [
      { label: "Point Finger", text: "Say it before they say something first." },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "opinion", openingStyle: "group-callout",
    tags: ["quiet", "suspicious", "group", "callout"],
  },

  

  {
    id: "Unhinged-058",
    category: "unhinged",
    title: "Trying Too Hard Edition",
    mainPrompt: "Who's clearly trying the hardest to be liked tonight?",
    reveals: [
      { label: "Follow-up", text: "Is it working — or is it just getting awkward?" },
      { label: "Roast Bait", text: "Who here gives off audition energy every time they speak?" },
    ],
    entryIntensity: 4, finalIntensity: 4, risk: "medium", type: "opinion", openingStyle: "group-callout",
    tags: ["group", "social", "callout", "awkward"],
  },

  // ─── SPICY ────────────────────────────────────────────────────────────────────

  {
    id: "spicy-001",
    category: "spicy",
    title: "Friends Ex Situation Edition",
    mainPrompt: "Would you forgive a friend who hooked up with your ex?",
    reveals: [
      { label: "Twist 1", text: "They say it was a one-time thing and they were drunk." },
      { label: "Twist 2", text: "Now they're dating." },
      { label: "Confession", text: "Have you ever pulled this off and kept quiet?" },
    ],
    entryIntensity: 3, finalIntensity: 5, risk: "high", type: "opinion", openingStyle: "opinion",
    tags: ["friends", "ex", "betrayal", "confession"],
  },

  {
    id: "spicy-002",
    category: "spicy",
    title: "Secret Crush Situation Edition",
    mainPrompt: "Is it ever okay to make a move on someone your friend has a crush on?",
    reveals: [
      { label: "Twist 1", text: "Your friend never actually told them how they feel." },
      { label: "Twist 2", text: "Now that person is clearly into you instead." },
      { label: "Confession", text: "Have you ever pulled this off and kept quiet?" },
    ],
    entryIntensity: 3, finalIntensity: 5, risk: "high", type: "opinion", openingStyle: "opinion",
    tags: ["crush", "friends", "betrayal", "confession"],
  },

  {
    id: "spicy-003",
    category: "spicy",
    title: "Secret Hookup Edition",
    mainPrompt: "Have you ever hooked up with someone your partner doesn't know about?",
    reveals: [
      { label: "Twist 1", text: "It happened before you got serious… but you've never brought it up." },
      { label: "Twist 2", text: "They've asked you about that person before." },
      { label: "Roast Bait", text: "Who here would need a full slideshow to explain their hookup history?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["hookup", "secret", "cheating", "confession"],
  },

  {
    id: "spicy-004",
    category: "spicy",
    title: "Situationship Setup Edition",
    mainPrompt: "Is it wrong to flirt with someone you know isn't over their ex?",
    reveals: [
      { label: "Twist 1", text: "They said they were 'just talking' — not dating." },
      { label: "Twist 2", text: "Now their ex found out… and messaged you." },
      { label: "Confession", text: "Did you ever pretend you didn't know the full story?" },
    ],
    entryIntensity: 3, finalIntensity: 5, risk: "high", type: "opinion", openingStyle: "opinion",
    tags: ["flirting", "ex", "situationship", "confession"],
  },

  {
    id: "spicy-005",
    category: "spicy",
    title: "Embarrassing Sex Edition",
    mainPrompt: "What's the most embarrassing sex you still went back for — and why?",
    reveals: [
      { label: "Follow-up", text: "Be honest — was it them, or the feeling of being wanted?" },
      { label: "Tactical Silence", text: "Let that sit." },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["sex", "embarrassing", "confession"],
  },

  {
    id: "spicy-006",
    category: "spicy",
    title: "Fantasy Almost Shared Edition",
    mainPrompt: "What's a fantasy you almost brought up — but backed out last second?",
    reveals: [
      { label: "Follow-up", text: "Would you actually do it… if they asked first?" },
      { label: "Roast Bait", text: "Who here do you think would be down?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["fantasy", "sex", "confession"],
  },

  {
    id: "spicy-007",
    category: "spicy",
    title: "Shouldn't Have Pictured Edition",
    mainPrompt: "Who's someone you've pictured during sex that you definitely shouldn't have?",
    reveals: [
      { label: "Follow-up", text: "Once — or more than once?" },
      { label: "Point Finger", text: "Who here is suspiciously quiet right now?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["sex", "fantasy", "confession", "chaos"],
  },

  {
    id: "spicy-008",
    category: "spicy",
    title: "Down Bad Edition",
    mainPrompt: "What's the bare minimum someone did that had you absolutely down bad — and did you act on it?",
    reveals: [
      { label: "Follow-up", text: "Would you fall for it again today?" },
      { label: "Roast Bait", text: "Who here acts first, thinks never, and regrets always?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["down bad", "attraction", "confession"],
  },

  {
    id: "spicy-009",
    category: "spicy",
    title: "Body Before Brain Edition",
    mainPrompt: "What's a time your body said yes before your brain caught up?",
    reveals: [
      { label: "Follow-up", text: "Did it end well — or just messy?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["attraction", "impulse", "confession"],
  },

  {
    id: "spicy-010",
    category: "spicy",
    title: "Freaky Text Edition",
    mainPrompt: "What's the freakiest text you've ever sent — and did they reply?",
    reveals: [
      { label: "Follow-up", text: "Rate the response out of 10." },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["texting", "sex", "confession"],
  },

  {
    id: "spicy-011",
    category: "spicy",
    title: "Last Hookup Watching Edition",
    mainPrompt: "If your last hookup was watching this game right now, what would they expose about you first?",
    reveals: [
      { label: "Follow-up", text: "What's the one thing they know about you that nobody else here does?" },
      { label: "Roast Bait", text: "Who here would get exposed the worst?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "hypothetical",
    tags: ["hookup", "exposed", "confession", "chaos"],
  },

  {
    id: "spicy-012",
    category: "spicy",
    title: "Unexpected Turn-On Edition",
    mainPrompt: "What's a turn-on that's not supposed to be sexy… but works on you every single time?",
    reveals: [
      { label: "Follow-up", text: "When did you realize it had a hold on you?" },
      { label: "Confession", text: "If someone in this group did it right now… would it work?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["turn-on", "attraction", "confession"],
  },

  {
    id: "spicy-013",
    category: "spicy",
    title: "Never Admit Publicly Edition",
    mainPrompt: "Are you hooking up with someone you'd never admit to publicly?",
    reveals: [
      { label: "Follow-up", text: "Is it because of how they look — or who they are?" },
      { label: "Roast Bait", text: "Who here's definitely got a whole second account?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["secret", "hookup", "confession"],
  },

  {
    id: "spicy-014",
    category: "spicy",
    title: "Looked Harmless Edition",
    mainPrompt: "What's something that looked harmless… but was pure manipulation?",
    reveals: [
      { label: "Follow-up", text: "Did you fall for it — or play along?" },
      { label: "Point Finger", text: "Who's mastered the art of manipulation — and still calls it 'just being honest'?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["manipulation", "chaos", "confession"],
  },

  {
    id: "spicy-015",
    category: "spicy",
    title: "Read Too Far Into It Edition",
    mainPrompt: "What's a compliment that made you feel hot for a week — that you definitely read too far into?",
    reveals: [
      { label: "Roast Bait", text: "Who here would absolutely spiral over one text?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "confession", openingStyle: "self",
    tags: ["compliment", "spiral", "attraction", "confession"],
  },

  {
    id: "spicy-016",
    category: "spicy",
    title: "Surprised Yourself During Sex Edition",
    mainPrompt: "What's something you said during sex that surprised even you?",
    reveals: [
      { label: "Follow-up", text: "Did they say anything back — or just keep going?" },
      { label: "Point Finger", text: "Who here has definitely said something during sex they're hiding?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["sex", "confession", "chaos"],
  },

  {
    id: "spicy-017",
    category: "spicy",
    title: "Red Flag Makes It Hotter Edition",
    mainPrompt: "What's a red flag that only makes someone hotter to you?",
    reveals: [
      { label: "Roast Bait", text: "Who here gives exactly that energy?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["red flags", "attraction", "confession"],
  },

  {
    id: "spicy-018",
    category: "spicy",
    title: "Spontaneous Decision Edition",
    mainPrompt: "What's the most spontaneous sexual decision you've ever made — and would you do it again?",
    reveals: [
      { label: "Follow-up", text: "Worth it — or pure chaos?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["spontaneous", "sex", "confession"],
  },

  {
    id: "spicy-019",
    category: "spicy",
    title: "Drunk Text Edition",
    mainPrompt: "What's something you'd never say out loud… but would absolutely text if you were drunk enough?",
    reveals: [
      { label: "Follow-up", text: "And who would you text it to?" },
      { label: "Confession", text: "What's the wildest thing that actually happened after one of those texts — regret it or double down?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["texting", "drunk", "confession", "chaos"],
  },

  {
    id: "spicy-020",
    category: "spicy",
    title: "Sexiest Moment Not Sex Edition",
    mainPrompt: "What's the sexiest moment you've ever had that wasn't actually sex?",
    reveals: [
      { label: "Follow-up", text: "Would you go back to that moment — or play it differently now?" },
      { label: "Confession", text: "Did it stay innocent… or cross the line later?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["attraction", "tension", "confession"],
  },

  {
    id: "spicy-021",
    category: "spicy",
    title: "Accidental Turn On Edition",
    mainPrompt: "What's something someone did completely by accident that instantly turned you on?",
    reveals: [
      { label: "Follow-up", text: "Did you act on it — or play it cool?" },
      { label: "Confession", text: "What would you do differently if it happened today?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["accidental", "attraction", "confession"],
  },

  {
    id: "spicy-022",
    category: "spicy",
    title: "Used For Attention Edition",
    mainPrompt: "Have you ever used someone for attention just to feel sexy — and how far did you let it go?",
    reveals: [
      { label: "Follow-up", text: "Did they ever catch on?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["attention", "manipulation", "confession"],
  },

  {
    id: "spicy-023",
    category: "spicy",
    title: "Sexual Rumor Edition",
    mainPrompt: "What's a sexual rumor you heard about someone that made you want to test it yourself?",
    reveals: [
      { label: "Follow-up", text: "…Did you?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["rumor", "sex", "confession", "chaos"],
  },

  {
    id: "spicy-024",
    category: "spicy",
    title: "Two at Once Edition",
    mainPrompt: "Have you ever been flirting with two people at once — and they found out?",
    reveals: [
      { label: "Follow-up", text: "What happened — and who won?" },
      { label: "Confession", text: "Did you make the right choice — or just the easiest one?" },
    ],
    entryIntensity: 3, finalIntensity: 5, risk: "high", type: "confession", openingStyle: "self",
    tags: ["flirting", "chaos", "confession"],
  },

  {
    id: "spicy-025",
    category: "spicy",
    title: "Line That Worked Edition",
    mainPrompt: "What's a flirty line you dropped that worked a little too well?",
    reveals: [
      { label: "Follow-up", text: "Did you come up with it on the spot — or have it locked and loaded like a weapon?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "story", openingStyle: "self",
    tags: ["flirting", "smooth", "confession"],
  },

  {
    id: "spicy-026",
    category: "spicy",
    title: "Too Easy to Impress Edition",
    mainPrompt: "What's a moment you realized you were way too easy to impress?",
    reveals: [
      { label: "Follow-up", text: "They made eye contact… and you folded." },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "confession", openingStyle: "self",
    tags: ["attraction", "easy", "confession"],
  },

  {
    id: "spicy-027",
    category: "spicy",
    title: "Shameless for Attention Edition",
    mainPrompt: "What's something shameless you've done just to get noticed by someone fine?",
    reveals: [
      { label: "Follow-up", text: "And did it work?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["shameless", "attention", "confession"],
  },

  {
    id: "spicy-028",
    category: "spicy",
    title: "Petty After Rejection Edition",
    mainPrompt: "What's the pettiest thing you've done after someone rejected you?",
    reveals: [
      { label: "Follow-up", text: "Did they ever find out?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["rejection", "petty", "confession"],
  },

  {
    id: "spicy-029",
    category: "spicy",
    title: "Age Range Edition",
    mainPrompt: "What's the youngest or oldest you've seriously considered?",
    reveals: [
      { label: "Follow-up", text: "What was the situation that even put it on the table?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["age", "dating", "confession"],
  },

  {
    id: "spicy-030",
    category: "spicy",
    title: "Falling For You Edition",
    mainPrompt: "How do you know when someone is falling for you?",
    reveals: [
      { label: "Twist", text: "How does someone know when you are falling for them?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "opinion", openingStyle: "opinion",
    tags: ["attraction", "signs", "relationships"],
  },

  {
    id: "spicy-031",
    category: "spicy",
    title: "Smash or Pass Edition",
    mainPrompt: "Smash or pass ...on this group",
    reveals: [
      { label: "Roast Bait", text: "Name names or take the shame." },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "opinion", openingStyle: "group-callout",
    tags: ["smash or pass", "group", "chaos", "attraction"],
  },

  {
    id: "spicy-032",
    category: "spicy",
    title: "Celebrity Don't Get It Edition",
    mainPrompt: "Who's a celebrity everyone finds hot… that you just don't get?",
    reveals: [
       { label: "Twist", text: "What if they made a move on you?" },
      { label: "Twist", text: "who's a celebrity you find hot... that other's don't get" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "opinion", openingStyle: "opinion",
    tags: ["celebrity", "hot take", "opinion"],
  },

  {
    id: "spicy-033",
    category: "spicy",
    title: "Amazing Partner Bad Sex Edition",
    mainPrompt: "Could you stay with someone who treats you amazing… but the sex is bad?",
    reveals: [
      { label: "Follow-up", text: "Do you tell them — or just play along forever?" },
      { label: "Dig Depper", text: "One catch: it never gets better." },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["sex", "relationships", "debate"],
  },

  {
    id: "spicy-034",
    category: "spicy",
    title: "Money in Relationships Edition",
    mainPrompt: "How much does money actually matter in a relationship?",
    reveals: [
      { label: "Follow-up", text: "What if everything else is perfect?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["money", "relationships", "values"],
  },

  {
    id: "spicy-035",
    category: "spicy",
    title: "Hot but Embarrassing Edition",
    mainPrompt: "Could you date someone who's hot… but painfully embarrassing in public?",
    reveals: [
      { label: "Follow-up", text: "How much secondhand shame is too much?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "debate", openingStyle: "opinion",
    tags: ["dating", "embarrassing", "attraction"],
  },

  {
    id: "spicy-036",
    category: "spicy",
    title: "Obsessed vs Cold Edition",
    mainPrompt: "Would you rather someone be obsessed with you — or play it a little cold?",
    reveals: [
      { label: "Follow-up", text: "Where's the line between 'hot' and 'emotional damage'?" },
      { label: "Dig Deeper", text: "Which one actually gets you more hooked? Be honest." },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["attraction", "obsession", "relationships"],
  },

  {
    id: "spicy-037",
    category: "spicy",
    title: "Body Count Edition",
    mainPrompt: "How much does their body count actually matter to you?",
    reveals: [
      { label: "Follow-up", text: "And what's your own number?" },
      { label: "Roast Bait", text: "Who here shouldn't be talking so much right now?" },
    ],
    entryIntensity: 4, finalIntensity: 5, risk: "high", type: "debate", openingStyle: "opinion",
    tags: ["body count", "dating", "double standard"],
  },

  {
    id: "spicy-038",
    category: "spicy",
    title: "Way Less Attractive Edition",
    mainPrompt: "Would you rather date someone waaay less attractive than you… or waaay more?",
    reveals: [
      { label: "Follow-up", text: "Which one actually makes you more insecure?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["attraction", "insecurity", "dating"],
  },

  {
    id: "spicy-039",
    category: "spicy",
    title: "Funny vs Fine Edition",
    mainPrompt: "Would you rather date someone who's funny… or fine?",
    reveals: [
      { label: "Follow-up", text: "Which one actually keeps you around when things get hard?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "debate", openingStyle: "opinion",
    tags: ["dating", "attraction", "personality"],
  },

  {
    id: "spicy-040",
    category: "spicy",
    title: "Still Lives with Parents Edition",
    mainPrompt: "Could you take someone seriously if they still lived with their parents?",
    reveals: [
      { label: "Follow-up", text: "Is it about age, culture… or just the ick?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "debate", openingStyle: "opinion",
    tags: ["dating", "standards", "ick"],
  },

  {
    id: "spicy-041",
    category: "spicy",
    title: "Loved More Edition",
    mainPrompt: "Would you rather be loved more than you love them — or the other way around?",
    reveals: [
      { label: "Follow-up", text: "Which is the bigger risk — boredom or heartbreak?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["love", "relationships", "power"],
  },

  {
    id: "spicy-042",
    category: "spicy",
    title: "Doesn't Believe in Marriage Edition",
    mainPrompt: "Could you date someone who doesn't believe in marriage — if everything else is perfect?",
    reveals: [
      { label: "Follow-up", text: "Would you try to change their mind?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["marriage", "relationships", "values"],
  },

  {
    id: "spicy-043",
    category: "spicy",
    title: "Love Language Mismatch Edition",
    mainPrompt: "Could you be happy with someone whose love language doesn't match yours at all?",
    reveals: [
      { label: "Follow-up", text: "They're trying… but it's just not clicking." },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "debate", openingStyle: "opinion",
    tags: ["love language", "relationships", "compatibility"],
  },

  {
    id: "spicy-044",
    category: "spicy",
    title: "Found Out About Their Ex Edition",
    mainPrompt: "What's something you found out about their ex… that made you see them differently?",
    reveals: [
      { label: "Follow-up", text: "Be honest — did it make you trust them less… or want them more?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["ex", "trust", "relationships", "confession"],
  },

  {
    id: "spicy-045",
    category: "spicy",
    title: "Chemistry vs Safety Edition",
    mainPrompt: "Would you rather have insane physical chemistry — or deep emotional safety?",
    reveals: [
      { label: "Follow-up", text: "Which one are you secretly chasing right now?" },
      { label: "Point Finger", text: "Who's pretending to want safety but is really just addicted to the heat?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["chemistry", "safety", "relationships"],
  },

  {
    id: "spicy-046",
    category: "spicy",
    title: "Friends Hate Them Edition",
    mainPrompt: "Could you date someone who's super hot… but all your friends hate them?",
    reveals: [
      { label: "Follow-up", text: "Would you defend them… or start seeing what your friends see?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["dating", "friends", "loyalty"],
  },

  {
    id: "spicy-047",
    category: "spicy",
    title: "Close to Their Ex Edition",
    mainPrompt: "Could you date someone who's still close with their ex — but swears it's platonic?",
    reveals: [
      { label: "Follow-up", text: "What would be your dealbreaker moment?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["ex", "trust", "relationships"],
  },

  {
    id: "spicy-048",
    category: "spicy",
    title: "Flirts with Everyone Edition",
    mainPrompt: "Could you trust someone who flirts with everyone — but swears it means nothing?",
    reveals: [
      { label: "Follow-up", text: "If it's really harmless… why does it bother you?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["flirting", "trust", "relationships"],
  },

  {
    id: "spicy-049",
    category: "spicy",
    title: "Not Your Type Edition",
    mainPrompt: "Could you date someone who's emotionally perfect — but physically not your type at all?",
    reveals: [
      { label: "Follow-up", text: "Do you believe the attraction would ever grow?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "debate", openingStyle: "opinion",
    tags: ["attraction", "type", "relationships"],
  },

  {
    id: "spicy-050",
    category: "spicy",
    title: "No Rhythm Edition",
    mainPrompt: "Could you date someone with zero rhythm — like, none at all?",
    reveals: [
      { label: "Follow-up", text: "If you said yes… is it because you don't have any either?" },
    ],
    entryIntensity: 1, finalIntensity: 2, risk: "low", type: "debate", openingStyle: "opinion",
    tags: ["dating", "ick", "funny"],
  },

  {
    id: "spicy-051",
    category: "spicy",
    title: "Once A Cheater Edition",
    mainPrompt: "Does cheating once automatically make someone a cheater forever?",
    reveals: [
      { label: "Follow-up", text: "Could you ever truly forget it?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["cheating", "trust", "forgiveness"],
  },

  {
    id: "spicy-052",
    category: "spicy",
    title: "Physical vs Emotional Cheating Edition",
    mainPrompt: "What's worse — cheating physically, or emotionally?",
    reveals: [
      { label: "Tactical Silence", text: "Let that answer sit." },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["cheating", "emotional", "debate"],
  },

  {
    id: "spicy-053",
    category: "spicy",
    title: "Loyalty While Figuring It Out Edition",
    mainPrompt: "Is it fair to expect loyalty… while you're still figuring out what you want?",
    reveals: [
      { label: "Follow-up", text: "Be honest — would you commit to you?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["loyalty", "commitment", "relationships"],
  },

  {
    id: "spicy-054",
    category: "spicy",
    title: "50/50 or Power Edition",
    mainPrompt: "Should a relationship be 50/50 — or does someone always hold the power?",
    reveals: [
      { label: "Follow-up", text: "Who usually holds it — and why?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["power", "relationships", "balance"],
  },

  {
    id: "spicy-055",
    category: "spicy",
    title: "Attraction Fades Edition",
    mainPrompt: "Does attraction actually fade… or do people just stop trying?",
    reveals: [
      { label: "Follow-up", text: "Be real — have you stopped trying?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["attraction", "relationships", "effort"],
  },

  {
    id: "spicy-056",
    category: "spicy",
    title: "Expect But Don't Offer Edition",
    mainPrompt: "Do you expect things from your partner that you don't offer back?",
    reveals: [
      { label: "Follow-up", text: "Name one. Right now." },
      { label: "Dig Deeper", text: "What would they say if we asked them?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["relationships", "double standard", "confession"],
  },

  {
    id: "spicy-057",
    category: "spicy",
    title: "Loyalty with Options Edition",
    mainPrompt: "Is loyalty real… if you still think about your other options?",
    reveals: [
      { label: "Tactical Silence", text: "Let that one land." },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["loyalty", "temptation", "relationships"],
  },

  {
    id: "spicy-058",
    category: "spicy",
    title: "Men vs Women Cheating Edition",
    mainPrompt: "Do men and women cheat for different reasons?",
    reveals: [
      { label: "Follow-up", text: "Which one hurts more?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "high", type: "debate", openingStyle: "opinion",
    tags: ["cheating", "gender", "debate"],
  },

  {
    id: "spicy-059",
    category: "spicy",
    title: "Honest Enough for Second Chance Edition",
    mainPrompt: "Does someone deserve a second chance — just because they came clean?",
    reveals: [
      { label: "Follow-up", text: "Can honesty ever undo the damage?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "debate", openingStyle: "opinion",
    tags: ["honesty", "second chance", "trust"],
  },

  {
    id: "spicy-060",
    category: "spicy",
    title: "Best Friend Hook Up Edition",
    mainPrompt: "Would you let your best friend hook up with your ex — if they asked you first?",
    reveals: [
      { label: "Follow-up", text: "Or is someone here still way too possessive?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "opinion", openingStyle: "opinion",
    tags: ["ex", "friends", "loyalty"],
  },

  {
    id: "spicy-061",
    category: "spicy",
    title: "Dumbest Sign Edition",
    mainPrompt: "What's the dumbest thing you've convinced yourself was 'a sign'?",
    reveals: [
      { label: "Follow-up", text: "Did you act on it?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "low", type: "confession", openingStyle: "self",
    tags: ["delusion", "signs", "confession"],
  },

  {
    id: "spicy-062",
    category: "spicy",
    title: "Ignored on Purpose Edition",
    mainPrompt: "Have you ever ignored someone on purpose — just to keep the upper hand?",
    reveals: [
      { label: "Follow-up", text: "Did they crawl back — or ghost you harder?" },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "medium", type: "confession", openingStyle: "self",
    tags: ["power", "games", "confession", "manipulation"],
  },
{
    id: "spicy-063",
    category: "spicy",
    title: "Fold for Attention Edition",
    mainPrompt: "Who here would absolutely fold if the right person gave them attention tonight?",
    reveals: [
      { label: "Point Finger", text: "Say their name — they already know." },
    ],
    entryIntensity: 3, finalIntensity: 4, risk: "high", type: "opinion", openingStyle: "group-callout",
    tags: ["attention", "group", "callout", "chaos"],
  },
{
    id: "spicy-064",
    category: "spicy",
    title: "Pretending Not to Care Edition",
    mainPrompt: "Who here is way too good at pretending they don't care?",
    reveals: [
      { label: "Follow-up", text: "What's the giveaway?" },
    ],
    entryIntensity: 2, finalIntensity: 3, risk: "medium", type: "opinion", openingStyle: "group-callout",
    tags: ["pretending", "emotions", "group", "callout"],
  },

];