import Link from "next/link";
import Image from "next/image";
import { title } from "process";

export default function HomePage() {
  return (
    <main className="bg-white text-black">
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <Image
          src="/hero.jpg"         
          alt="Hero Valmaz"
          fill
          priority
          className="object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white">
              Valmaz Marketing Digital
            </h1>
            <p className="text-xl text-white/90 mb-10">
              Agencia con inteligencia.
            </p>
            <Link 
              href="/about"
              className="inline-block px-6 py-2 rounded-full bg-white text-black font-medium transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-105">
              Más información
            </Link>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-black tracking-tighter mb-10 text-center">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Sitios Web",               
                desc: "Diseño y desarrollo de páginas profesionales." 
              },
              { 
                title: "Plan de Marketing Digital",         
                desc: "Estrategia integral para tu negocio." 
              },
              { 
                title: "Diseño Gráfico",            
                desc: "Soluciones visuales para tu marca." 
              },
              { 
                title: "Fotografía",                
                desc: "Sesiones profesionales para tu marca." 
              },
              {
                title: "Marketing en Redes Sociales",
                desc: "Facebook, Instagram, Google Ads y más."
              },
              { 
                title: "Producción de Video",       
                desc: "Videos corporativos y promocionales." 
              },
              { 
                title: "Producción de Podcast",     
                desc: "Grabación, edición y distribución." 
              },
            ].map((s) => (
              <div key={s.title} className="border border-neutral-200 p-6 rounded-sm hover:border-black transition-colors">
                <h3 className="font-black text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-neutral-500 mb-4">{s.desc}</p>
                <Link href="/services" className="text-xs font-bold tracking-widest uppercase underline underline-offset-4">
                  Leer más →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/526643852992"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.552 4.1 1.515 5.828L.057 23.476a.5.5 0 0 0 .609.61l5.79-1.525A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.893 9.893 0 0 1-5.031-1.374l-.36-.214-3.733.983.997-3.648-.235-.374A9.862 9.862 0 0 1 2.1 12C2.1 6.534 6.534 2.1 12 2.1c5.465 0 9.9 4.434 9.9 9.9 0 5.465-4.435 9.9-9.9 9.9z" />
        </svg>
      </a>

    </main>
  );
}