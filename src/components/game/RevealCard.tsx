type RevealCardProps = {
  label: string;
  text: string;
};

export default function RevealCard({ label, text }: RevealCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <p className="text-white/50 mb-2">{label}</p>

      <p className="text-xl font-semibold leading-snug">{text}</p>
    </div>
  );
}