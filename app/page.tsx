import Blob from "@/components/blob";
import Image from "next/image";

const companies = [
  {
    name: "Anthropic",
    logo: "/companies/anthropic.svg",
    width: 137,
    height: 32,
  },
  {
    name: "Airbnb",
    logo: "/member-work-logos/airbnb.svg",
    width: 98,
    height: 32,
  },
  {
    name: "Vercel",
    logo: "/companies/vercel.svg",
    width: 104,
    height: 23,
  },
  {
    name: "Waymo",
    logo: "/member-work-logos/waymo.png",
    width: 130,
    height: 32,
  },
  {
    name: "Scale AI",
    logo: "/member-work-logos/scale-ai.svg",
    width: 76,
    height: 32,
  },
  {
    name: "Notion",
    logo: "/member-work-logos/notion.svg",
    width: 105,
    height: 30,
  },
  {
    name: "OpenAI",
    logo: "/companies/openai.svg",
    width: 120,
    height: 54,
  },
  {
    name: "Stripe",
    logo: "/companies/stripe.svg",
    width: 90,
    height: 40,
  },
];

const LOGO_SCALE = 0.9;

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-splash-dark pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative">
          <div className="absolute -top-1/2 sm:-top-1/3 -left-10 sm:left-10 md:left-80 z-0 h-[640px] w-[640px] sm:h-[800px] sm:w-[800px] animate-[spin_500s_infinite] opacity-50">
            <Blob />
          </div>
          <div className="mx-auto my-20 lg:my-32 max-w-[480px] sm:max-w-[832px] animate-[bob_12s_ease-in-out_infinite] relative z-10">
            <h1 className="font-bold leading-none text-6xl sm:text-9xl md:text-[118px] lg:text-9xl">
              <span className="block sm:pl-2">Let</span>
              <span className="relative -top-1 sm:-top-4 block font-normal text-center font-serif text-[72px] sm:text-[140px] md:text-[160px] lg:text-[176px]">
                opportunity
              </span>
              <span className="block text-right">knock.</span>
            </h1>
            <div className="max-w-[420px] sm:max-w-full pt-7 leading-snug text-2xl md:text-[28px] md:pl-3.5">
              <p>
                Job applications are dead. Get a warm referral to your ideal
                startup.
              </p>
            </div>
          </div>
        </div>

        {/* Where Hedgy members work */}
        <div className="relative z-10 border-b border-t border-white/20 pt-8 pb-9 mt-20">
          <h2 className="font-bold text-xl sm:text-2xl mb-8 sm:mb-12 md:mb-16 lg:mb-12">
            Where Hedgy members work
          </h2>
          <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-12">
            {/* Single row on large screens */}
            <div className="hidden lg:flex lg:flex-row lg:justify-between lg:items-center lg:w-full">
              {companies.slice(0, 8).map((company) => (
                <div
                  key={company.name}
                  className="flex items-center justify-center"
                >
                  <Image
                    className="origin-center scale-90 xl:scale-100 invert"
                    src={company.logo}
                    alt={company.name}
                    width={company.width * LOGO_SCALE}
                    height={company.height * LOGO_SCALE}
                  />
                </div>
              ))}
            </div>

            {/* Two rows on smaller screens */}
            <div className="lg:hidden flex flex-col items-center">
              {/* Top row with 4 logos */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full mb-8">
                {companies.slice(0, 4).map((company) => (
                  <div
                    key={company.name}
                    className="flex items-center justify-center"
                  >
                    <Image
                      className="origin-center scale-[85%] sm:scale-90 md:scale-95 invert"
                      src={company.logo}
                      alt={company.name}
                      width={company.width * LOGO_SCALE}
                      height={company.height * LOGO_SCALE}
                    />
                  </div>
                ))}
              </div>

              {/* Bottom row with 4 logos */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
                {companies.slice(4, 8).map((company) => (
                  <div
                    key={company.name}
                    className="flex items-center justify-center"
                  >
                    <Image
                      className="origin-center scale-[85%] sm:scale-90 md:scale-95 invert"
                      src={company.logo}
                      alt={company.name}
                      width={company.width * LOGO_SCALE}
                      height={company.height * LOGO_SCALE}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="md:grid md:grid-cols-2 pb-4 mt-20">
          <div className="xl:max-w-[640px]">
            <p className="mt-12 max-w-3xl text-4xl font-bold">
              Flip the model –<br />
              startups apply to you.
            </p>
            <p className="mt-7 pr-5 xl:pr-3 text-2xl leading-normal pb-16 lg:pb-24 opacity-90">
              We do the work to surface only opportunities you'd actually move
              for. Our confidential, always-on recruiting approach eliminates
              the exhausting back-and-forth typically required to find the right
              role.
            </p>
          </div>
          <div className="md:border-l border-white/20 md:pl-8 xl:px-12 2xl:px-16 pb-4 md:pb-10 lg:pb-3 md:self-center">
            <div className="mx-auto mb-10 md:mb-16 w-full sm:pr-0 lg:pr-6 lg:text-left">
              <h2 className="border-t border-white/20 md:border-none text-[84px] font-bold leading-none pt-16 md:pt-4 lg:pt-0">
                Learn more.
              </h2>
            </div>
            <a
              href="https://hedgy.works"
              className="rounded-full transition-all ease-linear items-center duration-75 justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:cursor-not-allowed text-white bg-transparent border-white shadow-[-3px_3px_0_white] active:translate-x-[-2px] active:translate-y-[2px] active:shadow-none hover:translate-x-[-1px] hover:translate-y-[1px] hover:shadow-[-1px_1px_0_white] px-6 block text-2xl font-bold py-8 border-2 w-full text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Hedgy.works
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
