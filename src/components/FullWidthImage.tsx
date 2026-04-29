import Image from "next/image";

export default function FullWidthImage() {
  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden aspect-[375/565] md:aspect-[1440/900]">
        <Image
          src="/Image 27.png"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
