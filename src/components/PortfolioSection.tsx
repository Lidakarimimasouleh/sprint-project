import Image from "next/image";

const PROJECTS = [
  {
    image: "/Image 32.png",
    chips: ["Social Media", "Photography"],
    title: "Surfers Paradise",
  },
  {
    image: "/Image 33.png",
    chips: ["Social Media", "Photography"],
    title: "Agency 976",
  },
  {
    image: "/Image 34.png",
    chips: ["Social Media", "Photography"],
    title: "Cyberpunk Caffe",
  },
  {
    image: "/Image 35.png",
    chips: ["Social Media", "Photography"],
    title: "Minimal Playground",
  },
];

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full overflow-hidden aspect-[4/5]">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
        <div className="absolute bottom-4 left-4 flex gap-3">
          {project.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-[24px] bg-white/30 backdrop-blur-[20px] px-3 py-1.5 text-[12px] font-mono text-[#1f1f1f] leading-none whitespace-nowrap"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <span className="font-bold text-[24px] md:text-[36px] leading-[1.1] text-[#1f1f1f] uppercase tracking-[-0.02em]">
          {project.title}
        </span>
        <Image
          src="/Link Arrow.svg"
          alt="View project"
          width={24}
          height={24}
          className="shrink-0"
        />
      </div>
    </div>
  );
}

function CTABox() {
  return (
    <div className="relative flex flex-col gap-6 p-8">
      {/* Corner brackets */}
      <svg className="absolute top-0 left-0 w-5 h-5" viewBox="0 0 20 20" fill="none">
        <path d="M19 1H1V19" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="square" />
      </svg>
      <svg className="absolute top-0 right-0 w-5 h-5" viewBox="0 0 20 20" fill="none">
        <path d="M1 1H19V19" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="square" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-5 h-5" viewBox="0 0 20 20" fill="none">
        <path d="M19 19H1V1" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="square" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-5 h-5" viewBox="0 0 20 20" fill="none">
        <path d="M1 19H19V1" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="square" />
      </svg>

      <p className="text-[16px] leading-[1.6] text-[#1f1f1f] italic">
        Discover how my creativity transforms ideas into impactful digital
        experiences — schedule a call with me to get started.
      </p>
      <div>
        <a
          href="#"
          className="inline-flex items-center bg-[#1f1f1f] text-white px-7 py-4 rounded-[16px] text-[16px] font-medium leading-none"
        >
          Let&apos;s talk
        </a>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section className="w-full bg-white py-[80px] px-4 md:px-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-12">
        <div className="flex items-start gap-3">
          <h2 className="font-light text-[32px] md:text-[96px] leading-[0.9] tracking-[-0.04em] uppercase text-[#1f1f1f]">
            SELECTED
            <br />
            WORK
          </h2>
          <span className="font-mono text-[14px] leading-[1.1] text-[#1f1f1f] mt-1 shrink-0">
            004
          </span>
        </div>
        <div
          className="font-mono text-[14px] uppercase leading-[1.1] shrink-0 text-[#1f1f1f]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          [ portfolio ]
        </div>
      </div>

      {/* Mobile: single column */}
      <div className="flex md:hidden flex-col gap-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
        <CTABox />
      </div>

      {/* Desktop: two staggered columns */}
      <div className="hidden md:flex gap-8">
        {/* Left column: Surfers Paradise, Cyberpunk Caffe, CTA */}
        <div className="flex-1 flex flex-col gap-8">
          <ProjectCard project={PROJECTS[0]} />
          <ProjectCard project={PROJECTS[2]} />
          <CTABox />
        </div>
        {/* Right column: Agency 976, Minimal Playground (offset 240px) */}
        <div className="flex-1 flex flex-col gap-8 pt-[240px]">
          <ProjectCard project={PROJECTS[1]} />
          <ProjectCard project={PROJECTS[3]} />
        </div>
      </div>
    </section>
  );
}
