type PromptCardProps = {
  title: string;
  text: string;
};

export default function PromptCard({ title, text }: PromptCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 mb-6">
      <p className="text-white/50 mb-3">{title}</p>

      <p className="text-2xl font-semibold leading-snug">
        {text}
      </p>
    </div>
  );
}