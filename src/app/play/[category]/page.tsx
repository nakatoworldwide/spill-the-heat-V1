import GameClient from "@/components/GameClient";
import { prompts } from "@/data/prompts";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function PlayPage({ params }: Props) {
  const { category } = await params;

  const categoryPrompts = prompts.filter(
    (prompt) => prompt.category === category
  );

  if (categoryPrompts.length === 0) {
    return (
      <main className="min-h-screen bg-black text-white p-6">
        <h1 className="text-3xl font-bold mb-4">No prompts found</h1>
        <p className="text-white/60">
          No prompts exist for the category: {category}
        </p>
      </main>
    );
  }

  return <GameClient category={category} prompts={categoryPrompts} />;
}