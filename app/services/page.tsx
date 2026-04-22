import Image from "next/image";
import Link from "next/link";

import { services } from "../lib/services";

export default function ServicesPage() {
  return (
    <main className="bg-[#f5f4f0] text-neutral-900">
      <section className="relative overflow-hidden bg-neutral-950 px-6 pb-16 pt-20 md:px-12 md:pb-20 md:pt-24">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute left-10 top-16 h-px w-24 bg-white/10" />

        <div className="relative mx-auto max-w-6xl">
          <h1 className="mt-3 max-w-4xl font-serif text-5xl font-normal leading-[1.02] text-white md:text-6xl">
            Lo que ofrecemos en Valmaz Marketing Digital
          </h1>
        </div>
      </section>

      <section className="px-6 py-8 md:px-12 md:py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.slug}
              className="overflow-hidden rounded-sm border border-black/10 bg-white"
            >
              <div className="relative h-64 overflow-hidden bg-neutral-900">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h2 className="mt-2 font-serif text-4xl font-normal leading-none text-white">
                    {service.title}
                  </h2>
                </div>
              </div>

              <div className="px-6 py-7">
                <p className="text-sm leading-relaxed text-neutral-600">
                  {service.listingDescription}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-dashed border-black/10 pt-5">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-950 transition-opacity duration-300 hover:opacity-60"
                  >
                    Leer mas
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
