import Image from "next/image";
import type { ReactNode } from "react";

interface FuncItem {
  icon: ReactNode;
  text: string;
}

const funcionesItems: FuncItem[] = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-none stroke-white stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    text: "Estrategias de marketing digital orientadas al crecimiento de ventas y posicionamiento de marca.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-none stroke-white stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    text: "Planeación y ejecución de campañas publicitarias en Facebook e Instagram.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-none stroke-white stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"
      >
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    ),
    text: "Gestión y administración de redes sociales empresariales.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-none stroke-white stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"
      >
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    text: "Creación de contenido visual y audiovisual: fotografía y producción de video profesional.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-none stroke-white stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    text: "Desarrollo y mantenimiento de sitios web corporativos.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-none stroke-white stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    text: "Branding, posicionamiento de marca y campañas de reclutamiento digital.",
  },
];

export default function About() {
  return (
    <main className="bg-[#f5f4f0] font-sans text-neutral-900">
      <section className="relative overflow-hidden bg-neutral-950 px-6 pb-16 pt-20 md:px-12 md:pb-20 md:pt-24">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute left-10 top-16 h-px w-24 bg-white/10" />

        <div className="relative mx-auto max-w-6xl">
          <h1 className="max-w-3xl font-serif text-5xl font-normal leading-[1.05] text-white md:text-6xl">
            Agencia con inteligencia.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/55">
            Desde 2016, ayudamos a empresas a crecer mediante estrategias de marketing
            digital, creatividad y tecnología.
          </p>
        </div>
      </section>

      <section className="px-6 py-8 md:px-12 md:py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-sm border border-black/10 bg-white md:grid-cols-2">
          <div className="relative min-h-[360px] overflow-hidden bg-neutral-900">
            <Image
              src="/photo-camera.jpg"
              alt="Equipo y entorno creativo de Valmaz Marketing Digital"
              fill
              priority
              quality={70}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/25 to-black/70" />
            <div className="absolute inset-x-0 top-8 flex justify-center px-6 md:top-10">
              <span className="font-serif text-[92px] leading-none text-white/18 md:text-[140px]">
                2016
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <span className="inline-flex rounded-sm border border-white/15 bg-white/[0.08] px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/75 backdrop-blur-sm">
                Fundada en Tijuana, B.C.
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-white px-6 py-10 md:px-12 md:py-14">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[3px] text-neutral-400">
              Nuestra historia
            </p>
            <h2 className="mb-5 font-serif text-2xl font-normal leading-snug text-neutral-950">
              Valmaz Marketing Digital
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-neutral-600">
              Valmaz fue fundada en 2016 en Tijuana, Baja California, por Víctor
              Alejandro López Martínez, especialista en marketing y consultor
              empresarial con amplia trayectoria en sectores como servicios,
              restaurantes, salud, logística e industria.
            </p>
            <p className="mb-3 text-sm leading-relaxed text-neutral-600">
              Desde su creación, la agencia combina creatividad, estrategia y
              tecnología para ofrecer soluciones integrales: campañas publicitarias,
              gestión de redes sociales, producción audiovisual y desarrollo de
              plataformas digitales.
            </p>
            <p className="text-sm leading-relaxed text-neutral-600">
              Hoy, Valmaz cuenta con una cartera diversa de clientes en Tijuana y el
              norte de México, con un equipo especializado en diseño, producción,
              desarrollo web y gestión de campañas.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f0ede8] px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
          <div className="rounded-sm border border-black/10 bg-white p-8 shadow-[0_1px_0_rgba(0,0,0,0.03)] md:p-10">
            <h3 className="mb-4 font-serif text-xl font-normal">¿Quiénes somos y qué hacemos?</h3>
            <p className="rounded-sm border border-dashed border-neutral-300 p-4 text-sm italic leading-relaxed text-neutral-700">
              Nuestra misión es ayudar a cada cliente a crecer con soluciones
              innovadoras, prácticas y rentables que sí funcionen en el mundo actual,
              mientras nuestra visión es convertirnos en la agencia referente de nueva
              generación en México y la región fronteriza, reconocida por crear marcas
              más fuertes, negocios más rentables y estrategias que se adelantan al
              futuro.
            </p>
          </div>

          <div className="rounded-sm border border-black/10 bg-white p-8 shadow-[0_1px_0_rgba(0,0,0,0.03)] md:p-10">
            <h3 className="mb-4 font-serif text-xl font-normal">¿A dónde vamos?</h3>
            <p className="rounded-sm border border-dashed border-neutral-300 p-4 text-sm italic leading-relaxed text-neutral-700">
              Valmaz Marketing es una agencia de marketing digital con visión moderna,
              estratégica y orientada a resultados, creada para impulsar el
              crecimiento de negocios, marcas y empresas que buscan vender más,
              posicionarse mejor y evolucionar en un mercado cada vez más
              competitivo; combinamos creatividad, publicidad, tecnología, contenido,
              análisis y ejecución inteligente para transformar ideas en oportunidades
              reales de negocio, desarrollando campañas, marcas, sitios web,
              producción audiovisual y estrategias que conectan con las personas y
              generan impacto medible.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-2 font-serif text-2xl font-normal">Lo que hacemos por tu empresa</h2>
          <p className="mb-10 text-sm text-neutral-400">
            Servicios diseñados para impulsar tu crecimiento digital
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {funcionesItems.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-4 rounded-sm border border-neutral-200 bg-[#fcfbf8] p-5 transition-colors hover:border-neutral-300"
              >
                <div className="flex h-8 w-8 min-w-[32px] items-center justify-center rounded-sm bg-neutral-900">
                  {item.icon}
                </div>
                <p className="text-sm leading-relaxed text-neutral-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
