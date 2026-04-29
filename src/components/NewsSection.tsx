import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { imageUrlFor } from "@/sanity/lib/image";

interface NewsItem {
  image: string;
  caption: string;
}

const FALLBACK: NewsItem[] = [
  { image: "/News 1.png", caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { image: "/News 2.png", caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { image: "/News 3.png", caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

const QUERY = `*[_type == "newsPost"] | order(order asc) { image, caption }`;

function ReadMore() {
  return (
    <a
      href="#"
      className="inline-flex self-start items-center gap-2.5 border-b border-black py-1 shrink-0"
    >
      <span className="text-[14px] font-medium text-black leading-normal" style={{ letterSpacing: "-0.04em" }}>
        Read more
      </span>
      <Image src="/Link Arrow.svg" alt="" width={18} height={18} />
    </a>
  );
}

function NewsCard({ image, caption }: NewsItem) {
  return (
    <>
      <div className="relative w-full h-[469px] shrink-0">
        <Image src={image} alt="" fill className="object-cover" />
      </div>
      <p className="text-[#1f1f1f] text-[14px] font-normal leading-[1.3] flex-1" style={{ letterSpacing: "-0.04em" }}>
        {caption}
      </p>
      <ReadMore />
    </>
  );
}

export default async function NewsSection() {
  const sanityPosts = await client.fetch(QUERY);

  const news: NewsItem[] =
    sanityPosts.length > 0
      ? sanityPosts.map((p: { image: object; caption: string }) => ({
          image: imageUrlFor(p.image).width(800).url(),
          caption: p.caption,
        }))
      : FALLBACK;

  return (
    <section className="w-full bg-[#f3f3f3]">
      {/* Mobile */}
      <div className="md:hidden px-4 py-16">
        <h2 className="font-light text-[32px] uppercase text-black leading-[0.86] mb-8" style={{ letterSpacing: "-0.08em" }}>
          Keep up with my latest news &amp; achievements
        </h2>
        <div className="flex gap-4 overflow-hidden">
          {news.map((item, i) => (
            <div key={i} className="flex flex-col gap-4 shrink-0 w-[300px]">
              <div className="relative w-[300px] h-[398px] shrink-0">
                <Image src={item.image} alt="" fill className="object-cover" />
              </div>
              <p className="text-[#1f1f1f] text-[14px] font-normal leading-[1.3]" style={{ letterSpacing: "-0.04em" }}>
                {item.caption}
              </p>
              <ReadMore />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex items-end justify-between px-8 py-[120px]">
        {/* Rotated title */}
        <div className="flex shrink-0 h-[706px] w-[110px] items-center justify-center">
          <div className="-rotate-90 flex-none">
            <p className="font-light text-[64px] uppercase text-black leading-[0.86] whitespace-nowrap" style={{ letterSpacing: "-5.12px" }}>
              Keep up with my latest
            </p>
            <p className="font-light text-[64px] uppercase text-black leading-[0.86] whitespace-nowrap" style={{ letterSpacing: "-5.12px" }}>
              news &amp; achievements
            </p>
          </div>
        </div>

        {/* Cards row */}
        <div className="flex flex-1 gap-[31px] items-start ml-8">
          <div className="flex-1 flex flex-col gap-4">
            {news[0] && <NewsCard {...news[0]} />}
          </div>
          <div className="w-px shrink-0 self-stretch bg-[#d9d9d9]" />
          <div className="flex-1 flex flex-col gap-4 pt-[120px]">
            {news[1] && <NewsCard {...news[1]} />}
          </div>
          <div className="w-px shrink-0 self-stretch bg-[#d9d9d9]" />
          <div className="flex-1 flex flex-col gap-4">
            {news[2] && <NewsCard {...news[2]} />}
          </div>
        </div>
      </div>
    </section>
  );
}
