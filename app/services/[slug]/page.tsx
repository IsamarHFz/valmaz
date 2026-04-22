import Link from "next/link";
import { notFound } from "next/navigation";

import { services } from "../../lib/services";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-[#f5f4f0] text-neutral-900">
      <section className="relative overflow-hidden bg-neutral-950 px-6 pb-16 pt-20 md:px-12 md:pb-20 md:pt-24">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute left-10 top-16 h-px w-24 bg-white/10" />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-white/55 transition-colors duration-300 hover:text-white"
          >
            <span aria-hidden="true">&lt;-</span>
            Volver a servicios
          </Link>
          <h1 className="mt-8 max-w-4xl font-serif text-5xl font-normal leading-[1.02] text-white md:text-6xl">
            {service.title}
          </h1>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-4xl rounded-sm border border-black/10 bg-white p-10 text-center">
          <h2 className="mt-4 font-serif text-4xl font-normal text-neutral-950">
            Esta es la subpagina de {service.title}
          </h2>
          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex rounded-full border border-black px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-neutral-950 transition-colors duration-300 hover:bg-neutral-950 hover:text-white"
            >
              Volver a servicios
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
