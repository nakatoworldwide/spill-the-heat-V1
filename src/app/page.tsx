import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#111]">
      <div className="flex flex-1 flex-col px-6 py-12 max-w-6xl mx-auto w-full">

        <div className="flex flex-1 flex-col justify-start pb-10">
          <img src="/logo.svg" alt="Spill The Heat" className="w-full max-w-sm" />
        </div>

        <div className="flex flex-col gap-4 mb-40">
          <Link
            href="/category"
            className="rounded-xl bg-[#FF5A1F] py-4 text-center text-base font-bold text-white transition active:scale-95 w-full"
          >
            Start
          </Link>
          <p className="text-xs text-white/20 text-center">Best with 3+ players</p>
        </div>

      </div>
    </main>
  );
}