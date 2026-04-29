import Image from "next/image";

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

const BioText = () => (
  <p className="text-[14px] leading-[1.6] text-[#1f1f1f] tracking-[-0.02em]">
    Placeholder paragraph one. This is where you introduce yourself — your
    background, your passion for your craft, and what drives you creatively. Two
    to three sentences work best here. Placeholder paragraph two. Here you can
    describe your technical approach, how you collaborate with clients, or what
    sets your work apart from others in your field.
  </p>
);

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-[80px] px-4 md:px-8">
      {/* ── Mobile ── */}
      <div className="flex md:hidden flex-col gap-6">
        {/* Labels */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1]">
            002
          </span>
          <span className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1]">
            [ About ]
          </span>
        </div>

        {/* Bio text with corner brackets */}
        <div className="flex items-stretch gap-3">
          <BracketLeft />
          <div className="flex-1 py-3">
            <BioText />
          </div>
          <BracketRight />
        </div>

        {/* Portrait image */}
        <div className="relative w-full overflow-hidden aspect-[343/483]">
          <Image
            src="/image 26.png"
            alt="Portrait"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* ── Desktop ── */}
      <div className="hidden md:flex items-start">
        {/* Left: [ About ] label */}
        <div className="w-[28.6%] shrink-0 pt-1">
          <span className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1]">
            [ About ]
          </span>
        </div>

        {/* Right: bio (bottom-left) + image (right) */}
        <div className="flex-1 flex gap-8 min-h-[614px]">
          {/* Bio text — pushed to bottom */}
          <div className="flex-1 flex flex-col justify-end">
            <div className="flex items-stretch gap-3">
              <BracketLeft />
              <div className="flex-1 py-3">
                <BioText />
              </div>
              <BracketRight />
            </div>
          </div>

          {/* Image column — 002 peeks to the left of the image */}
          <div className="w-[49.4%] shrink-0 relative">
            <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1] absolute top-0 left-0 z-10">
              002
            </span>
            <div className="ml-[10.3%] h-full relative overflow-hidden min-h-[614px]">
              <Image
                src="/image 26.png"
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
