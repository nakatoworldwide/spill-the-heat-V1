import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <div className="flex flex-1 flex-col px-6 pt-0 pb-12 max-w-6xl mx-auto w-full">

        <div className="flex flex-col">
          <img src="/logo.svg" alt="Spill The Heat" className="w-160 md:w-140" />
          <p className="text-white/50 text-base mt-3 italic font-bold">The game that exposes everyone</p>
        </div>

        <div className="flex flex-col gap-4 mt-auto mb-40 -mx-6 px-6 md:mx-0 md:px-0">
          <Link
            href="/category"
            className="rounded-xl bg-[#FF5A1F] py-4 text-center text-2xl font-black text-white transition active:scale-95 w-full md:w-90 md:mx-auto"
          >
            Start
          </Link>
          <p className="text-xs text-white/20 text-center">Best with 3+ players</p>
        </div>

      </div>
    </main>
  );
}