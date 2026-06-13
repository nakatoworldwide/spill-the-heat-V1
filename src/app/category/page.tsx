import Link from "next/link";

const categories = [
  { name: "Funny", description: "Embarrassing stories & roasts", emoji: "😂" },
  { name: "Spicy", description: "Confessions, attraction & chaos", emoji: "🌶️" },
  { name: "Unhinged", description: "Dark confessions & no limits", emoji: "🤪" },
  { name: "Debate", description: "Pick a side & defend it", emoji: "🗣️" },
];

export default function CategoryPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <div className="flex flex-col flex-1 px-6 py-12 max-w-3xl mx-auto w-full">

        <div className="mb-8">
          <h1 className="text-6xl font-extrabold text-white leading-tight">
            What's<br />the vibe?
          </h1>
        </div>

        <div className="flex flex-col gap-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/play/${category.name.toLowerCase()}`}
              className="flex items-center justify-between rounded-2xl border border-white/15 px-5 py-5 transition active:bg-[#FF5A1F] active:border-[#FF5A1F] group"
            >
              <div>
                <p className="text-2xl font-black uppercase tracking-widest text-white">
                  {category.emoji} {category.name}
                </p>
                <p className="text-sm text-white/30 mt-1">{category.description}</p>
              </div>
              <span className="text-[#FF5A1F] text-4xl font-black group-active:text-white">›</span>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}