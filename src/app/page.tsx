import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-6">
      
      <h1 className="text-5xl font-bold tracking-tight mb-4">
        Spill the Heat
      </h1>

      <p className="text-white/70 text-center max-w-sm mb-10">
        The game that exposes everyone.
      </p>

      <Link
        href="/category"
        className="rounded-full bg-white text-black px-8 py-4 font-semibold transition hover:scale-105"
      >
        Start
      </Link>

    </main>
  );
}