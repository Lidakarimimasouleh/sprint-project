export default function Footer() {
  const socials = ["Facebook", "Instagram", "X.com", "Linkedin"];

  const LegalLinks = () => (
    <div className="flex gap-[34px] items-center">
      <a
        href="#"
        className="text-[12px] font-normal text-white uppercase underline leading-[1.1]"
        style={{ letterSpacing: "-0.04em" }}
      >
        licences
      </a>
      <a
        href="#"
        className="text-[12px] font-normal text-white uppercase underline leading-[1.1]"
        style={{ letterSpacing: "-0.04em" }}
      >
        Privacy policy
      </a>
    </div>
  );

  const CtaBlock = () => (
    <div className="flex flex-col gap-3 w-[298px]">
      <p
        className="text-[24px] font-light italic text-white uppercase leading-[1.1]"
        style={{ letterSpacing: "-0.04em" }}
      >
        Have a{" "}
        <span className="font-black not-italic">project</span>
        {" "}in mind?
      </p>
      <a
        href="#"
        className="self-start border border-white rounded-[24px] px-4 py-3 text-[14px] font-medium text-white leading-none"
        style={{ letterSpacing: "-0.04em" }}
      >
        Let&apos;s talk
      </a>
    </div>
  );

  return (
    <footer className="w-full bg-black">
      {/* ── Mobile ── */}
      <div className="md:hidden px-4 pt-12 flex flex-col gap-12">
        {/* CTA + socials + divider */}
        <div className="flex flex-col gap-6">
          <CtaBlock />
          <div className="flex flex-col gap-4">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                className="text-[18px] font-normal text-white uppercase leading-[1.1]"
                style={{ letterSpacing: "-0.04em" }}
              >
                {s}
              </a>
            ))}
          </div>
          <div className="w-full h-px bg-white/20" />
        </div>

        {/* Bottom: legal (centered) + label + H.Studio */}
        <div className="flex flex-col gap-4 overflow-hidden items-center">
          {/* Legal links centered; pb-8 + gap-4 = 48px → matches divider-to-legal spacing */}
          <div className="flex gap-[34px] items-center pb-8">
            <a
              href="#"
              className="text-[12px] font-normal text-white uppercase underline leading-[1.1]"
              style={{ letterSpacing: "-0.04em" }}
            >
              licences
            </a>
            <a
              href="#"
              className="text-[12px] font-normal text-white uppercase underline leading-[1.1]"
              style={{ letterSpacing: "-0.04em" }}
            >
              Privacy policy
            </a>
          </div>
          {/* Label + H.Studio — left-aligned, full width */}
          <div className="flex flex-col gap-3 w-full overflow-hidden">
            <p className="font-mono text-[10px] text-white uppercase leading-[1.1]">
              [ Coded By Claude ]
            </p>
            <p
              className="text-white font-semibold capitalize leading-[0.8] whitespace-nowrap"
              style={{ fontSize: "91.425px", letterSpacing: "-5.4855px" }}
            >
              H.Studio
            </p>
          </div>
        </div>
      </div>

      {/* ── Desktop ── */}
      <div className="hidden md:flex flex-col gap-[120px] px-8 pt-12">
        {/* Top: CTA | socials | socials + divider */}
        <div className="flex flex-col gap-12">
          <div className="flex items-start justify-between">
            <CtaBlock />

            {/* Center socials */}
            <div className="text-center w-[298px]">
              <p
                className="text-[18px] font-normal text-white uppercase leading-[1.1]"
                style={{ letterSpacing: "-0.04em" }}
              >
                Facebook
              </p>
              <p
                className="text-[18px] font-normal text-white uppercase leading-[1.1]"
                style={{ letterSpacing: "-0.04em" }}
              >
                Instagram
              </p>
            </div>

            {/* Right socials */}
            <div className="text-right w-[298px]">
              <p
                className="text-[18px] font-normal text-white uppercase leading-[1.1]"
                style={{ letterSpacing: "-0.04em" }}
              >
                X.com
              </p>
              <p
                className="text-[18px] font-normal text-white uppercase leading-[1.1]"
                style={{ letterSpacing: "-0.04em" }}
              >
                Linkedin
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/20" />
        </div>

        {/* Bottom: H.Studio + legal */}
        <div className="flex items-end justify-between">
          {/* H.Studio clipped container */}
          <div className="relative h-[219px] overflow-hidden shrink-0" style={{ width: 1093 }}>
            {/* Rotated label */}
            <div
              className="absolute left-0 flex items-center justify-center"
              style={{ width: 15, top: "calc(50% - 75.5px)", height: 160 }}
            >
              <span className="-rotate-90 whitespace-nowrap font-mono text-[14px] text-white uppercase leading-[1.1]">
                [ Coded By Claude ]
              </span>
            </div>

            {/* Large H.Studio */}
            <p
              className="absolute text-white font-semibold capitalize leading-[0.8] whitespace-nowrap"
              style={{
                fontSize: 290,
                letterSpacing: "-17.4px",
                top: "calc(50% + 6.5px)",
                left: "calc(50% - 541.5px)",
                transform: "translateY(-50%)",
              }}
            >
              H.Studio
            </p>
          </div>

          {/* Legal links — bottom-right */}
          <div className="pb-8">
            <LegalLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}
