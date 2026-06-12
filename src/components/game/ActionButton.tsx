type ActionButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "white" | "orange" | "red";
};

export default function ActionButton({
  children,
  onClick,
  variant = "white",
}: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`mt-2 w-full rounded-xl px-5 py-3 text-center font-bold text-base transition active:scale-95 ${
        variant === "orange"
          ? "bg-[#FF5A1F] text-white"
          : variant === "red"
          ? "bg-[#E8192C] text-white"
          : "bg-white text-[#111]"
      }`}
    >
      {children}
    </button>
  );
}