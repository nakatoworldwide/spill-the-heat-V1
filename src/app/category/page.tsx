import Link from "next/link";

const categories = [
  { name: "Funny", description: "Keep it light", emoji: "😂" },
  { name: "Spicy", description: "Things get real", emoji: "🌶️" },
  { name: "Unhinged", description: "No rules here", emoji: "🤪" },
  { name: "Debate", description: "Pick a side", emoji: "🗣️" },
];

export default function CategoryPage() {
  return (
    <main className="min-h-screen bg-[#111] flex flex-col">
      <div className="flex flex-col flex-1 px-6 py-12 max-w-3xl mx-auto w-full">

        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-white leading-tight">
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
                <p className="text-sm font-bold uppercase tracking-widest text-white">
                  {category.emoji} {category.name}
                </p>
                <p className="text-xs text-white/30 mt-1">{category.description}</p>
              </div>
              <span className="text-[#FF5A1F] text-xl group-active:text-white">›</span>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}