import Link from "next/link";

const categories = [
  "Funny",
  "Spicy",
  "Unhinged",
  "Debate",
];

export default function CategoryPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <h1 className="text-4xl font-bold mb-3">
        What’s the vibe?
      </h1>

      <p className="text-white/60 mb-10">
        Choose a category.
      </p>

      <div className="flex flex-col gap-4">

        {categories.map((category) => (
          <Link
            key={category}
            href={`/play/${category.toLowerCase()}`}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-2xl font-semibold transition hover:bg-white hover:text-black"
          >
            {category}
          </Link>
        ))}

      </div>

    </main>
  );
}