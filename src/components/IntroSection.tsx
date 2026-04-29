import { client } from "@/sanity/lib/client";

interface SiteSettings {
  introYearsLabel?: string;
  introLines?: string[];
  introTag?: string;
}

async function getSettings(): Promise<SiteSettings | null> {
  return client.fetch(`*[_type == "siteSettings"][0]{introYearsLabel,introLines,introTag}`);
}

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

const FALLBACK_LINES = [
  "A creative director   /",
  "Photographer",
  "Born & raised",
  "on the south side",
  "of chicago.",
];

const DESKTOP_INDENTS = ["0%", "15.5%", "44.3%", "0%", "44%"];

function LineText({ text }: { text: string }) {
  if (!text.includes("&")) return <>{text}</>;
  const [before, after] = text.split("&");
  return <>{before}{AMP}{after}</>;
}

export default async function IntroSection() {
  const settings = await getSettings();

  const yearsLabel = settings?.introYearsLabel ?? "8+ years in industry";
  const lines = settings?.introLines?.length ? settings.introLines : FALLBACK_LINES;
  const tag = settings?.introTag ?? "creative freelancer";

  return (
    <section className="w-full bg-white py-12 md:py-[120px] px-4 md:px-8">
      <div className="flex flex-col gap-6">
        {/* Label + divider */}
        <div className="flex flex-col gap-3 items-end">
          <p className="font-mono text-[14px] text-[#1f1f1f] uppercase text-right leading-[1.1]">
            [ {yearsLabel} ]
          </p>
          <div className="w-full h-px bg-[#1f1f1f]" />
        </div>

        {/* Mobile: centered, stacked */}
        <div className="flex md:hidden flex-col gap-2 items-center text-center uppercase">
          <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1]">
            001
          </span>
          {lines.map((line, i) => (
            <p
              key={i}
              className="font-light text-[32px] tracking-[-0.08em] leading-[0.84] whitespace-pre"
            >
              <LineText text={line} />
            </p>
          ))}
          <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1]">
            [ {tag} ]
          </span>
        </div>

        {/* Desktop: staggered */}
        <div className="hidden md:flex flex-col gap-2 uppercase">
          {lines.map((line, i) => {
            const indent = DESKTOP_INDENTS[i] ?? "0%";
            const isFirst = i === 0;
            const isLast = i === lines.length - 1;

            if (isFirst) {
              return (
                <div key={i} className="flex items-start gap-3">
                  <p className="font-light text-[clamp(48px,6.67vw,96px)] tracking-[-0.08em] leading-[0.84] whitespace-pre">
                    <LineText text={line} />
                  </p>
                  <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1] mt-1 shrink-0">
                    001
                  </span>
                </div>
              );
            }

            return (
              <div
                key={i}
                className="relative"
                style={{ paddingLeft: indent }}
              >
                <p className="font-light text-[clamp(48px,6.67vw,96px)] tracking-[-0.08em] leading-[0.84]">
                  <LineText text={line} />
                </p>
                {isLast && (
                  <span className="absolute font-mono text-[14px] text-[#1f1f1f] leading-[1.1] left-[78.4%] top-[26px] whitespace-nowrap">
                    [ {tag} ]
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
