import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { imageUrlFor } from "@/sanity/lib/image";

interface Testimonial {
  logo: string;
  logoW: number;
  logoH: number;
  quote: string;
  author: string;
  desktopLeft: string;
  desktopTop: string;
  desktopRotate: string;
}

const POSITIONS = [
  { desktopLeft: "7.08%",  desktopTop: "14.39%", desktopRotate: "-6.85deg" },
  { desktopLeft: "46.94%", desktopTop: "27.56%", desktopRotate: "2.9deg"   },
  { desktopLeft: "21.18%", desktopTop: "56.03%", desktopRotate: "2.23deg"  },
  { desktopLeft: "68.54%", desktopTop: "55.32%", desktopRotate: "-4.15deg" },
];

const FALLBACK: Testimonial[] = [
  { logo: "/Logo top left.png",    logoW: 143, logoH: 19, quote: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.", author: "Marko Stojković",  ...POSITIONS[0] },
  { logo: "/logo top right.png",   logoW: 138, logoH: 19, quote: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",                                                                                            author: "Lukas Weber",      ...POSITIONS[1] },
  { logo: "/logo bottom left.png", logoW: 109, logoH: 31, quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.", author: "Sarah Jenkins",    ...POSITIONS[2] },
  { logo: "/logo bottom right.png",logoW: 81,  logoH: 36, quote: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",                                                                                      author: "Sofia Martínez",   ...POSITIONS[3] },
];

const QUERY = `*[_type == "testimonial"] | order(order asc) { logo, quote, author }`;

interface CardProps {
  logo: string;
  logoW: number;
  logoH: number;
  quote: string;
  author: string;
  rotate: string;
  width?: number;
}

function TestimonialCard({ logo, logoW, logoH, quote, author, rotate, width = 353 }: CardProps) {
  return (
    <div
      className="bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 p-6 rounded-[4px] shrink-0"
      style={{ width, transform: `rotate(${rotate})` }}
    >
      <div className="relative shrink-0" style={{ width: logoW, height: logoH }}>
        <Image src={logo} alt="Client logo" fill className="object-contain object-left" />
      </div>
      <p className="text-[#1f1f1f] text-[18px] font-normal leading-[1.3]" style={{ letterSpacing: "-0.04em" }}>
        {quote}
      </p>
      <p className="text-black text-[16px] font-black leading-[1.1] uppercase whitespace-nowrap" style={{ letterSpacing: "-0.04em" }}>
        {author}
      </p>
    </div>
  );
}

export default async function TestimonialsSection() {
  const sanityTestimonials = await client.fetch(QUERY);

  const testimonials: Testimonial[] =
    sanityTestimonials.length > 0
      ? sanityTestimonials.slice(0, 4).map((t: { logo: object; quote: string; author: string }, i: number) => ({
          logo: imageUrlFor(t.logo).height(80).url(),
          logoW: 120,
          logoH: 32,
          quote: t.quote,
          author: t.author,
          ...POSITIONS[i % POSITIONS.length],
        }))
      : FALLBACK;

  const mobileFirst = testimonials[0];
  const mobileSecond = testimonials[3] ?? testimonials[1];

  return (
    <section className="w-full bg-[#f5f5f5]">
      {/* Mobile */}
      <div className="md:hidden overflow-hidden px-4 py-16">
        <h2 className="text-[64px] font-medium capitalize text-black leading-[0.8] mb-8" style={{ letterSpacing: "-0.07em" }}>
          Testimonials
        </h2>
        <div className="flex gap-4">
          {mobileFirst && <TestimonialCard {...mobileFirst} rotate="-3.5deg" width={260} />}
          {mobileSecond && <TestimonialCard {...mobileSecond} rotate="2deg" width={260} />}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block relative overflow-hidden min-h-[987px]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[198px] font-medium capitalize text-black text-center leading-[1.1]" style={{ letterSpacing: "-13.86px" }}>
            Testimonials
          </span>
        </div>
        {testimonials.map((t, i) => (
          <div key={i} className="absolute" style={{ left: t.desktopLeft, top: t.desktopTop }}>
            <TestimonialCard logo={t.logo} logoW={t.logoW} logoH={t.logoH} quote={t.quote} author={t.author} rotate={t.desktopRotate} />
          </div>
        ))}
      </div>
    </section>
  );
}
