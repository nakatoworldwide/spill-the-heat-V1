type ActionButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function ActionButton({ children, onClick }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-full bg-white text-black px-6 py-4 font-semibold transition hover:scale-105"
    >
      {children}
    </button>
  );
}