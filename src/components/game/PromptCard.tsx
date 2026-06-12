type PromptCardProps = {
  text: string;
};

export default function PromptCard({ text }: PromptCardProps) {
  return (
    <div className="bg-[#FF5A1F] rounded-2xl px-5 py-8 mb-5">
  <p className="text-white font-bold text-2xl leading-snug">{text}</p>
</div>
  );
}