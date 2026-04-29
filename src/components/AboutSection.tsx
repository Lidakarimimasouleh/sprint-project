import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { imageUrlFor } from "@/sanity/lib/image";

interface SiteSettings {
  aboutParagraph1?: string;
  aboutParagraph2?: string;
  aboutImage?: { asset: { _ref: string } };
}

async function getSettings(): Promise<SiteSettings | null> {
  return client.fetch(`*[_type == "siteSettings"][0]{aboutParagraph1,aboutParagraph2,aboutImage}`);
}

const FALLBACK_P1 =
  "Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here.";
const FALLBACK_P2 =
  "Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.";

const BracketLeft = () => (
  <div className="flex flex-col justify-between shrink-0 w-6 self-stretch py-[2px]">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M15 1H1V15" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M15 15H1V1" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  </div>
);

const BracketRight = () => (
  <div className="flex flex-col justify-between shrink-0 w-6 self-stretch py-[2px]">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M1 1H15V15" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M1 15H15V1" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  </div>
);

export default async function AboutSection() {
  const settings = await getSettings();

  const p1 = settings?.aboutParagraph1 ?? FALLBACK_P1;
  const p2 = settings?.aboutParagraph2 ?? FALLBACK_P2;
  const imgSrc = settings?.aboutImage
    ? imageUrlFor(settings.aboutImage).width(800).url()
    : "/image 26.png";

  const BioText = () => (
    <p className="text-[14px] leading-[1.6] text-[#1f1f1f] tracking-[-0.02em]">
      {p1} {p2}
    </p>
  );

  return (
    <section className="w-full bg-white py-[80px] px-4 md:px-8">
      {/* ── Mobile ── */}
      <div className="flex md:hidden flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1]">
            002
          </span>
          <span className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1]">
            [ About ]
          </span>
        </div>

        <div className="flex items-stretch gap-3">
          <BracketLeft />
          <div className="flex-1 py-3">
            <BioText />
          </div>
          <BracketRight />
        </div>

        <div className="relative w-full overflow-hidden aspect-[343/483]">
          <Image
            src={imgSrc}
            alt="Portrait"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* ── Desktop ── */}
      <div className="hidden md:flex items-start">
        <div className="w-[28.6%] shrink-0 pt-1">
          <span className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1]">
            [ About ]
          </span>
        </div>

        <div className="flex-1 flex gap-8 min-h-[614px]">
          <div className="flex-1 flex flex-col justify-end">
            <div className="flex items-stretch gap-3">
              <BracketLeft />
              <div className="flex-1 py-3">
                <BioText />
              </div>
              <BracketRight />
            </div>
          </div>

          <div className="w-[49.4%] shrink-0 relative">
            <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1] absolute top-0 left-0 z-10">
              002
            </span>
            <div className="ml-[10.3%] h-full relative overflow-hidden min-h-[614px]">
              <Image
                src={imgSrc}
                alt="About portrait"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
