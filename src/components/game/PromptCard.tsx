type PromptCardProps = {
  text: string;
  isFirst?: boolean;
};

export default function PromptCard({ text, isFirst }: PromptCardProps) {
  return (
    <div className="bg-[#FF5A1F] rounded-2xl px-5 py-8 mb-5 relative">
      {isFirst && (
        <p className="absolute top-3 left-5 text-white/60 text-sm italic font-bold">Ask the group...</p>
      )}
      <p className="text-white font-bold text-2xl leading-snug">{text}</p>
    </div>
  );
}