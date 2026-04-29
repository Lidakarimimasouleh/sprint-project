import Image from "next/image";

const SERVICES = [
  {
    number: "1",
    name: "Brand Discovery",
    image: "/Image 28.png",
  },
  {
    number: "2",
    name: "Web Design & Dev",
    image: "/Image 29.png",
  },
  {
    number: "3",
    name: "Marketing",
    image: "/Image 30.png",
  },
  {
    number: "4",
    name: "Photography",
    image: "/Image 31.png",
  },
];

const DESC =
  "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.";

export default function ServicesSection() {
  return (
    <section className="w-full bg-black text-white py-[80px] px-4 md:px-8">
      {/* [ services ] label */}
      <p className="font-mono text-[14px] uppercase leading-[1.1] mb-12">
        [ services ]
      </p>

      {/* Header: [4] + DELIVERABLES */}
      <div className="flex items-end justify-between mb-12">
        <span className="font-bold text-[clamp(40px,5.56vw,80px)] leading-none tracking-[-0.04em]">
          [4]
        </span>
        <span className="font-light text-[clamp(36px,6.67vw,96px)] uppercase leading-none tracking-[-0.04em]">
          Deliverables
        </span>
      </div>

      {/* Service items */}
      <div className="flex flex-col">
        {SERVICES.map((service, i) => (
          <div key={service.number} className={i < SERVICES.length - 1 ? "mb-12" : ""}>
            {/* Number + divider */}
            <div className="flex flex-col gap-3 mb-3">
              <span className="font-mono text-[14px] leading-[1.1]">
                [ {service.number} ]
              </span>
              <div className="w-full h-px bg-white/30" />
            </div>

            {/* Desktop content row */}
            <div className="hidden md:flex items-start pt-2 gap-4">
              {/* Service name — ~58% */}
              <h3 className="w-[58%] font-bold italic text-[40px] leading-[1.1] tracking-[-0.02em] uppercase shrink-0">
                {service.name}
              </h3>
              {/* Description — ~28% */}
              <p className="flex-1 text-[14px] leading-[1.6] text-white/70 pt-1">
                {DESC}
              </p>
              {/* Image — 151×151 */}
              <div className="relative shrink-0 w-[151px] h-[151px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Mobile content */}
            <div className="flex md:hidden flex-col gap-4 pt-2">
              <h3 className="font-bold italic text-[clamp(28px,8vw,40px)] leading-[1.1] tracking-[-0.02em] uppercase">
                {service.name}
              </h3>
              <p className="text-[14px] leading-[1.6] text-white/70">{DESC}</p>
              <div className="relative w-[151px] h-[151px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
