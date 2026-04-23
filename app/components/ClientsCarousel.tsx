"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type ClientLogo = {
  src: string;
  alt: string;
};

export default function ClientsCarousel({ logos }: { logos: ClientLogo[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "prev" | "next") => {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    const amount = Math.round(container.clientWidth * 0.72);
    container.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    const interval = window.setInterval(() => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const amount = Math.round(container.clientWidth * 0.72);
      const nextPosition = container.scrollLeft + amount;

      container.scrollTo({
        left: nextPosition >= maxScrollLeft ? 0 : nextPosition,
        behavior: "smooth",
      });
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scrollByAmount("prev")}
        aria-label="Ver logos anteriores"
        className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 text-3xl text-neutral-400 transition-colors duration-300 hover:text-neutral-700 md:inline-flex"
      >
        <span aria-hidden="true">‹</span>
      </button>

      <button
        type="button"
        onClick={() => scrollByAmount("next")}
        aria-label="Ver mas logos"
        className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 text-3xl text-neutral-400 transition-colors duration-300 hover:text-neutral-700 md:inline-flex"
      >
        <span aria-hidden="true">›</span>
      </button>

      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-0 scroll-smooth md:px-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {logos.map((client) => (
          <div
            key={client.alt}
            className="flex h-28 w-[260px] shrink-0 snap-start items-center justify-center md:h-32 md:w-[320px]"
          >
            <div className="relative h-16 w-full md:h-20">
              <Image src={client.src} alt={client.alt} fill className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
