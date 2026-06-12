"use client";

import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const [promptQueue, setPromptQueue] = useState<Prompt[]>([]);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [visibleRevealCount, setVisibleRevealCount] = useState(0);
  const [seenIds, setSeenIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const queue = createPromptQueue(prompts, {
      category,
      useIntensityProgression: true,
      excludeIds: seenIds,
    });
    setPromptQueue(queue);
    setCurrentPromptIndex(0);
    setVisibleRevealCount(0);
  }, [category]);

  const currentPrompt = promptQueue[currentPromptIndex];

  if (!currentPrompt) {
    return (
      <main className="min-h-screen bg-[#111] text-white">
        <div className="flex flex-col flex-1 px-5 py-6 max-w-3xl mx-auto w-full">
          <p className="text-white/40">Loading...</p>
        </div>
      </main>
    );
  }

  function revealNext() {
    setVisibleRevealCount((c) => c + 1);
  }

  function goToNextPrompt() {
    setVisibleRevealCount(0);
    setCurrentPromptIndex((current) => {
      const nextIndex = current + 1;
      if (nextIndex >= promptQueue.length) {
        const newSeenIds = new Set([...seenIds, ...promptQueue.map((p) => p.id)]);
        setSeenIds(newSeenIds);
        const newQueue = createPromptQueue(prompts, {
          category,
          useIntensityProgression: true,
          excludeIds: newSeenIds,
        });
        setPromptQueue(newQueue);
        return 0;
      }
      return nextIndex;
    });
  }

  function skipPrompt() {
    const currentIntensity = currentPrompt.entryIntensity;
    const usedIds = new Set(promptQueue.map((p) => p.id));
    const sameIntensityPrompts = prompts.filter(
      (p) =>
        p.category === category &&
        Number(p.entryIntensity) === currentIntensity &&
        p.id !== currentPrompt.id &&
        !usedIds.has(p.id)
    );

    if (sameIntensityPrompts.length > 0) {
      const shuffled = [...sameIntensityPrompts].sort(() => Math.random() - 0.5);
      const replacement = shuffled[0];
      setPromptQueue((queue) => {
        const newQueue = [...queue];
        newQueue[currentPromptIndex] = replacement;
        return newQueue;
      });
      setVisibleRevealCount(0);
    } else {
      goToNextPrompt();
    }
  }

  const allRevealed = visibleRevealCount >= currentPrompt.reveals.length;

  return (
    <main className="min-h-screen bg-[#111] text-white flex flex-col">

      <div className="flex items-center justify-between px-5 py-6">
        <button
          onClick={() => router.push("/category")}
          className="text-white/50 hover:text-white text-xl"
        >
          ←
        </button>
        <button
          onClick={skipPrompt}
          className="text-white/40 hover:text-white text-xs"
        >
          Skip This Topic
        </button>
      </div>

      <div className="flex flex-col flex-1 px-5 pb-6 max-w-3xl mx-auto w-full">

        <div className="mb-5">
  <p style={{
    fontFamily: "'Archivo Black', sans-serif",
    fontWeight: 900,
    fontSize: "clamp(48px, 12vw, 80px)",
    lineHeight: 0.92,
    letterSpacing: "2px",
    background: "linear-gradient(220deg, #FFB300 0%, #FF8F50 30%, #FF5A1F 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  }}>
    SPILL<br />THE<br />HEAT
  </p>
</div>

        <PromptCard text={currentPrompt.mainPrompt} />

        <div className="flex flex-col gap-3">
          {currentPrompt.reveals.map((reveal, index) => (
            <RevealCard
              key={index}
              label={reveal.label}
              text={reveal.text}
              isRevealed={index < visibleRevealCount}
              isNext={index === visibleRevealCount}
              onReveal={revealNext}
            />
          ))}

          {allRevealed && (
            <ActionButton onClick={goToNextPrompt}>
              Next Question →
            </ActionButton>
          )}
        </div>

      </div>
    </main>
  );
}