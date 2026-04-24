import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getServiceBySlug, services } from "../../lib/services";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Servicio no encontrado | Valmaz Marketing Digital",
    };
  }

  return {
    title: `${service.title} | Valmaz Marketing Digital`,
    description: service.listingDescription,
  };
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main className="bg-[#f5f4f0] text-neutral-900">
      <section className="relative overflow-hidden bg-neutral-950 px-6 pb-16 pt-20 md:px-12 md:pb-20 md:pt-24">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            quality={70}
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,10,10,0.49),rgba(10,10,10,0.52))]" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-white/60 transition-colors duration-300 hover:text-white"
          >
            <span aria-hidden="true">&lt;-</span>
            Volver a servicios
          </Link>

          <div className="mt-8 max-w-4xl">
            <h1 className="font-serif text-5xl font-normal leading-[1] text-white md:text-6xl lg:text-7xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/78 md:text-lg">
              {service.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:px-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="border-t border-black/10 pt-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
              Descripción del servicio
            </p>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-neutral-600 md:text-xl">
              {service.description}
            </p>
            <p className="mt-8 max-w-2xl border-l-2 border-neutral-900 pl-5 font-serif text-2xl leading-[1.35] text-neutral-900 md:text-3xl">
              {service.listingDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-14 md:px-12 md:pb-16">
        <div className="mx-auto max-w-5xl">
          <div className="border-t border-black/10 pt-8">
            <h2 className="max-w-3xl text-lg leading-relaxed text-neutral-600 md:text-xl">
              Cada servicio forma parte de una propuesta visual y digital enfocada en comunicar
              mejor tu marca.
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full border border-black px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-neutral-950 transition-colors duration-300 hover:bg-neutral-950 hover:text-white"
            >
              Solicitar información
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-12 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="border-t border-black/10 pt-8">
            <h2 className="font-medium uppercase text-3xl font-normal text-neutral-900 md:text-4xl">
              Más servicios
            </h2>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {relatedServices.map((item) => (
                <article key={item.slug} className="group">
                  <div className="relative h-56 overflow-hidden bg-neutral-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      loading="lazy"
                      quality={68}
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="font-serif text-3xl font-normal text-white">{item.title}</h3>
                    </div>
                  </div>
                  <div className="pt-5">
                    <p className="text-sm leading-6 text-neutral-600">{item.listingDescription}</p>
                    <Link
                      href={`/services/${item.slug}`}
                      className="mt-5 inline-flex text-xs font-medium uppercase tracking-[0.22em] text-neutral-950 transition-opacity duration-300 hover:opacity-60"
                    >
                      Ver servicio
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
