import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { imageUrlFor } from "@/sanity/lib/image";

interface ServiceItem {
  number: string;
  name: string;
  description: string;
  image: string;
}

const DEFAULT_DESC = "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.";

const FALLBACK: ServiceItem[] = [
  { number: "1", name: "Brand Discovery",  description: DEFAULT_DESC, image: "/Image 28.png" },
  { number: "2", name: "Web Design & Dev", description: DEFAULT_DESC, image: "/Image 29.png" },
  { number: "3", name: "Marketing",        description: DEFAULT_DESC, image: "/Image 30.png" },
  { number: "4", name: "Photography",      description: DEFAULT_DESC, image: "/Image 31.png" },
];

const QUERY = `*[_type == "service"] | order(order asc) { title, description, image }`;

export default async function ServicesSection() {
  const sanityServices = await client.fetch(QUERY);

  const services: ServiceItem[] =
    sanityServices.length > 0
      ? sanityServices.map((s: { title: string; description: string; image: object }, i: number) => ({
          number: String(i + 1),
          name: s.title,
          description: s.description ?? DEFAULT_DESC,
          image: imageUrlFor(s.image).width(300).url(),
        }))
      : FALLBACK;

  return (
    <section className="w-full bg-black text-white py-[80px] px-4 md:px-8">
      <p className="font-mono text-[14px] uppercase leading-[1.1] mb-12">[ services ]</p>

      <div className="flex items-end justify-between mb-12">
        <span className="font-bold text-[clamp(40px,5.56vw,80px)] leading-none tracking-[-0.04em]">
          [{services.length}]
        </span>
        <span className="font-light text-[clamp(36px,6.67vw,96px)] uppercase leading-none tracking-[-0.04em]">
          Deliverables
        </span>
      </div>

      <div className="flex flex-col">
        {services.map((service, i) => (
          <div key={service.number} className={i < services.length - 1 ? "mb-12" : ""}>
            <div className="flex flex-col gap-3 mb-3">
              <span className="font-mono text-[14px] leading-[1.1]">[ {service.number} ]</span>
              <div className="w-full h-px bg-white/30" />
            </div>

            {/* Desktop */}
            <div className="hidden md:flex items-start pt-2 gap-4">
              <h3 className="w-[58%] font-bold italic text-[40px] leading-[1.1] tracking-[-0.02em] uppercase shrink-0">
                {service.name}
              </h3>
              <p className="flex-1 text-[14px] leading-[1.6] text-white/70 pt-1">{service.description}</p>
              <div className="relative shrink-0 w-[151px] h-[151px] overflow-hidden">
                <Image src={service.image} alt={service.name} fill className="object-cover" />
              </div>
            </div>

            {/* Mobile */}
            <div className="flex md:hidden flex-col gap-4 pt-2">
              <h3 className="font-bold italic text-[clamp(28px,8vw,40px)] leading-[1.1] tracking-[-0.02em] uppercase">
                {service.name}
              </h3>
              <p className="text-[14px] leading-[1.6] text-white/70">{service.description}</p>
              <div className="relative w-[151px] h-[151px] overflow-hidden">
                <Image src={service.image} alt={service.name} fill className="object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
