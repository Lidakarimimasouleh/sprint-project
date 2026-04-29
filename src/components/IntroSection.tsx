const AMP = (
  <span
    style={{
      fontFamily: "var(--font-playfair)",
      fontStyle: "italic",
      fontWeight: 400,
    }}
  >
    &amp;
  </span>
);

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-12 md:py-[120px] px-4 md:px-8">
      <div className="flex flex-col gap-6">
        {/* Label + divider */}
        <div className="flex flex-col gap-3 items-end">
          <p className="font-mono text-[14px] text-[#1f1f1f] uppercase text-right leading-[1.1]">
            [ 8+ years in industry ]
          </p>
          <div className="w-full h-px bg-[#1f1f1f]" />
        </div>

        {/* Mobile: centered, stacked */}
        <div className="flex md:hidden flex-col gap-2 items-center text-center uppercase">
          <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1]">
            001
          </span>
          <p className="font-light text-[32px] tracking-[-0.08em] leading-[0.84] whitespace-pre">
            {`A creative director   /`}
          </p>
          <p className="font-light text-[32px] tracking-[-0.08em] leading-[0.84]">
            Photographer
          </p>
          <p className="font-light text-[32px] tracking-[-0.08em] leading-[0.84]">
            Born {AMP} raised
          </p>
          <p className="font-light text-[32px] tracking-[-0.08em] leading-[0.84]">
            on the south side
          </p>
          <p className="font-light text-[32px] tracking-[-0.08em] leading-[0.84]">
            of chicago.
          </p>
          <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1]">
            [ creative freelancer ]
          </span>
        </div>

        {/* Desktop: staggered */}
        <div className="hidden md:flex flex-col gap-2 uppercase">
          {/* Line 1: text + "001" label inline */}
          <div className="flex items-start gap-3">
            <p className="font-light text-[clamp(48px,6.67vw,96px)] tracking-[-0.08em] leading-[0.84] whitespace-pre">
              {`A creative director   /`}
            </p>
            <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1] mt-1 shrink-0">
              001
            </span>
          </div>

          {/* Line 2: 15.5% indent */}
          <div className="pl-[15.5%]">
            <p className="font-light text-[clamp(48px,6.67vw,96px)] tracking-[-0.08em] leading-[0.84]">
              Photographer
            </p>
          </div>

          {/* Line 3: 44.3% indent */}
          <div className="pl-[44.3%]">
            <p className="font-light text-[clamp(48px,6.67vw,96px)] tracking-[-0.08em] leading-[0.84]">
              Born {AMP} raised
            </p>
          </div>

          {/* Line 4: no indent */}
          <div>
            <p className="font-light text-[clamp(48px,6.67vw,96px)] tracking-[-0.08em] leading-[0.84]">
              on the south side
            </p>
          </div>

          {/* Line 5: 44% indent + floating label */}
          <div className="relative pl-[44%]">
            <p className="font-light text-[clamp(48px,6.67vw,96px)] tracking-[-0.08em] leading-[0.84]">
              of chicago.
            </p>
            <span className="absolute font-mono text-[14px] text-[#1f1f1f] leading-[1.1] left-[78.4%] top-[26px] whitespace-nowrap">
              [ creative freelancer ]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
