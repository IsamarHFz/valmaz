import Image from "next/image";
import Link from "next/link";

import ClientsCarousel from "./components/ClientsCarousel";
import { featuredServices } from "./lib/services";

const clientLogos = [
  { src: "/3Reyes.png", alt: "3 Reyes" },
  { src: "/DLUX.png", alt: "DLUX" },
  { src: "/EcoRecycling.png", alt: "Eco Recycling" },
  { src: "/HMN.jpg", alt: "HMN" },
  { src: "/Mexpogroup.png", alt: "Mexpogroup" },
  { src: "/NovoPlastic.png", alt: "Novo Plastic" },
  { src: "/Pawti.png", alt: "Pawti" },
];

export default function HomePage() {
  return (
    <main className="bg-white text-black">
      <section className="relative flex min-h-screen items-center justify-center pt-8 md:pt-10">
        <Image
          src="/hero.jpg"
          alt="Hero Valmaz"
          fill
          priority
          quality={72}
          className="object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h1 className="mb-4 font-serif text-5xl font-normal leading-[1.02] text-white md:text-7xl">
            Valmaz Marketing Digital
          </h1>
          <p className="mb-10 text-xl text-white/90">Agencia con inteligencia.</p>
          <Link
            href="/about"
            className="inline-block rounded-full bg-white px-6 py-2 font-medium text-black transition-all duration-300 ease-in-out hover:scale-105 hover:bg-black hover:text-white"
          >
            Más información
          </Link>
        </div>
      </section>

      <section className="bg-[#f5f4f0] px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl font-normal leading-tight text-neutral-950 md:text-4xl">
              Nuestros Servicios
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-500">
              Descubre los servicios que ofrecemos y cómo podemos ayudarte a alcanzar tus objetivos.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service) => (
              <article
                key={service.slug}
                className="overflow-hidden rounded-sm border border-black/10 bg-white"
              >
                <div className="relative h-64 overflow-hidden bg-neutral-900">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    loading="lazy"
                    quality={68}
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="mt-2 font-serif text-4xl font-normal leading-none text-white">
                      {service.title}
                    </h3>
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
                      Leer más
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block rounded-full border border-black px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-black hover:text-white"
            >
              Ver más servicios
            </Link>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-t border-black/8 bg-white px-6 py-14 md:px-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="mt-3 font-medium text-3xl font-normal text-neutral-950 md:text-4xl">
              Clientes con los que hemos trabajado
            </h2>
          </div>

          <ClientsCarousel logos={clientLogos} />
        </div>
      </section>
    </main>
  );
}
