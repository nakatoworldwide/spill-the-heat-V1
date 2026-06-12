type RevealCardProps = {
  label: string;
  text: string;
  isRevealed: boolean;
  isNext: boolean;
  onReveal: () => void;
};

export default function RevealCard({
  label,
  text,
  isRevealed,
  isNext,
  onReveal,
}: RevealCardProps) {
  const dimmedClass = `rounded-xl px-5 py-8 text-center font-semibold text-2xl bg-[#1e1e1e] border border-[#FF5A1F] text-[#FF5A1F]`;
const orangeClass = `rounded-xl px-5 py-8 text-center font-semibold text-2xl bg-[#FF5A1F] text-white`;
  if (isRevealed) {
    return <div className={orangeClass}>{text}</div>;
  }

  if (isNext) {
    return (
      <button
        type="button"
        onClick={onReveal}
        className={`${dimmedClass} transition active:scale-95 cursor-pointer`}
      >
        Tap to Reveal {label}
      </button>
    );
  }

  return (
    <div className={`${dimmedClass} opacity-30 pointer-events-none`}>
      Tap to Reveal {label}
    </div>
  );
}