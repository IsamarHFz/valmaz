import Image from "next/image";

type ClientLogo = {
  src: string;
  alt: string;
};

export default function ClientsCarousel({ logos }: { logos: ClientLogo[] }) {
  const repeatedLogos = [...logos, ...logos];

  return (
    <div className="overflow-hidden">
      <div className="logo-marquee-track flex gap-6 md:gap-8">
        {repeatedLogos.map((client, index) => (
          <div
            key={`${client.alt}-${index}`}
            className="flex h-28 w-[220px] shrink-0 items-center justify-center rounded-sm border border-black/6 bg-[#faf9f6] px-6 md:h-32 md:w-[280px]"
          >
            <div className="relative h-14 w-full md:h-16">
              <Image
                src={client.src}
                alt={client.alt}
                fill
                loading="lazy"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
