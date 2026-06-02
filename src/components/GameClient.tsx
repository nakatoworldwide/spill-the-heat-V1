"use client";

import { useEffect, useState } from "react";
import type { Prompt } from "@/data/prompts";
import { createPromptQueue } from "@/lib/promptEngine";
import PromptCard from "@/components/game/PromptCard";
import RevealCard from "@/components/game/RevealCard";
import ActionButton from "@/components/game/ActionButton";

type GameClientProps = {
  category: string;
  prompts: Prompt[];
};

export default function GameClient({ category, prompts }: GameClientProps) {
  const [promptQueue, setPromptQueue] = useState<Prompt[]>([]);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [visibleRevealCount, setVisibleRevealCount] = useState(0);

  useEffect(() => {
    setPromptQueue(
      createPromptQueue(prompts, {
        category,
        useIntensityProgression: true,
      })
    );

    setCurrentPromptIndex(0);
    setVisibleRevealCount(0);
  }, [category, prompts]);

  const currentPrompt = promptQueue[currentPromptIndex];

  if (!currentPrompt) {
    return (
      <main className="min-h-screen bg-black text-white p-6">
        <p className="text-white/60">Loading prompt...</p>
      </main>
    );
  }

  function revealNext() {
    setVisibleRevealCount((currentCount) => currentCount + 1);
  }

  function goToNextPrompt() {
    const nextIndex = currentPromptIndex + 1;

    if (nextIndex >= promptQueue.length) {
  alert("Session complete — all prompts in this category have been shown.");
  setPromptQueue(
    createPromptQueue(prompts, {
      category,
      useIntensityProgression: true,
    })
  );
  setCurrentPromptIndex(0);
} else {
  setCurrentPromptIndex(nextIndex);
}

    setVisibleRevealCount(0);
  }

  const hasMoreReveals = visibleRevealCount < currentPrompt.reveals.length;

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <p className="text-white/50 mb-4 capitalize">{category}</p>

      <h1 className="text-3xl font-bold mb-8">{currentPrompt.title}</h1>

      <PromptCard title="Main Prompt" text={currentPrompt.mainPrompt} />

      <div className="flex flex-col gap-4 mb-8">
        {currentPrompt.reveals
          .slice(0, visibleRevealCount)
          .map((reveal, index) => (
            <RevealCard
              key={index}
              label={reveal.label}
              text={reveal.text}
            />
          ))}
      </div>

      {hasMoreReveals ? (
        <ActionButton onClick={revealNext}>Tap to reveal</ActionButton>
      ) : (
        <ActionButton onClick={goToNextPrompt}>Next Question</ActionButton>
      )}
    </main>
  );
}