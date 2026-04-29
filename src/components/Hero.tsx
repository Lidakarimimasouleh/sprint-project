import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative w-full h-[635px] md:min-h-[847px] flex flex-col justify-between md:justify-start md:gap-[clamp(80px,16.7vw,240px)] px-4 md:px-8 pb-6 md:pb-8">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          className="object-cover object-[center_20%]"
          priority
        />
      </div>

      {/* Frosted glass panel — fades in from top */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[349px] backdrop-blur-[10px] bg-white/[0.01]"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, white 35%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, white 35%)",
        }}
      />

      <Navbar />

      {/* Hero content */}
      <div className="relative flex flex-col">
        {/* Headline */}
        <div className="flex flex-col">
          {/* "[ Hello i'm ]" label */}
          <div className="flex items-center justify-center md:justify-start px-[18px] md:px-[18px] mb-[-4px] md:mb-[-15px]">
            <p className="font-mono text-[14px] text-white uppercase mix-blend-overlay leading-[1.1] whitespace-nowrap">
              [ Hello i&apos;m ]
            </p>
          </div>

          {/* Big name */}
          <h1 className="font-medium text-white mix-blend-overlay capitalize text-center w-full leading-[0.8] md:leading-[1.1] text-[88px] md:text-[clamp(96px,13.75vw,198px)] tracking-[-0.07em] whitespace-pre-wrap">
            {`Harvey   Specter`}
          </h1>
        </div>

        {/* Description + CTA — right on desktop, left on mobile */}
        <div className="flex justify-start md:justify-end mt-5 md:mt-0">
          <div className="flex flex-col gap-[17px] w-[294px]">
            <p className="text-[#1f1f1f] text-[14px] tracking-[-0.04em] uppercase leading-[1.1] italic font-bold">
              H.Studio is a{" "}
              <span className="font-normal not-italic">full-service</span>{" "}
              creative studio creating beautiful digital experiences and
              products. We are an{" "}
              <span className="font-normal not-italic">award winning</span>{" "}
              design and art group specializing in branding, web design and
              engineering.
            </p>
            <button className="w-fit flex items-center justify-center bg-black text-white text-[14px] font-medium tracking-[-0.04em] px-4 py-3 rounded-full cursor-pointer hover:bg-neutral-800 transition-colors">
              Let&apos;s talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
