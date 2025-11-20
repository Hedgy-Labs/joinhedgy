import Blob from "@/components/blob";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative">
          <div className="absolute -top-1/2 sm:-top-1/3 -left-10 sm:left-10 md:left-80 z-0 h-[640px] w-[640px] sm:h-[800px] sm:w-[800px] animate-[spin_500s_infinite] opacity-50">
            <Blob />
          </div>
          <div className="mx-auto my-20 lg:my-32 max-w-[480px] sm:max-w-[736px] animate-[bob_12s_ease-in-out_infinite]">
            <h1 className="font-bold leading-none text-6xl sm:text-9xl md:text-[118px] lg:text-9xl">
              <span className="block sm:pl-2">Let</span>
              <span className="relative -top-1 sm:-top-4 block font-normal text-center font-serif text-[72px] sm:text-[140px] md:text-[160px] lg:text-[176px]">
                opportunity
              </span>
              <span className="block text-right">knock.</span>
            </h1>
            <div className="max-w-[420px] sm:max-w-full pt-7 leading-snug text-2xl md:text-[28px] md:pl-3.5">
              <p className="mb-8">
                Join Hedgy is the candidate sourcing arm of{" "}
                <a
                  href="https://hedgy.works"
                  className="underline hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hedgy
                </a>
                .
              </p>
              <p className="text-xl opacity-90">
                We connect exceptional tech talent with their ideal startup
                opportunities through personalized recruiting and targeted
                outreach.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-20 text-center pb-20">
          <h2 className="text-3xl font-bold mb-6">
            Interested in learning more?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Visit our main platform to see how Hedgy works for top tech
            professionals.
          </p>
          <a
            href="https://hedgy.works"
            className="inline-block px-8 py-4 text-xl font-bold bg-white text-black hover:bg-gray-200 transition-colors rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Hedgy.works
          </a>
        </div>
      </div>
    </main>
  );
}
