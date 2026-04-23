"use client";

import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const contactInfo = {
  phone: "+52 664 385 2992 ",
  whatsapp: "526641234567",
  email: "valmazgroup@gmail.com",
  address: "Tijuana, Baja California, México",
  addressFull: "Blvd Agua Caliente, 9955, Calete, Tijuana, México",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.3148422089125!2d-117.02068582516598!3d32.517737173773135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94840208ff4ab%3A0x91081caa78c1cc22!2sValmaz!5e0!3m2!1ses!2smx!4v1776932578564!5m2!1ses!2smx", 
};

const schedule = [
  { days: "Lunes - Viernes", hours: "9:00 am - 5:00 pm" },
  { days: "Sábado", hours: "Cerrado" },
  { days: "Domingo", hours: "Cerrado" },
];

const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

const socials = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/valmazmarketingdigital",
    icon: FacebookIcon,
    handle: "@valmaz",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/valmazgroup",
    icon: InstagramIcon,
    handle: "@valmaz",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero */}
      <section className="bg-black text-white px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-tight max-w-2xl">
            ¡Contáctanos para mayor información!
          </h1>
        </div>
      </section>

      {/* Content grid */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Left — contact data */}
        <div className="space-y-10">

          {/* Direct contact */}
          <div>
            <h2 className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-5">
              Datos de contacto
            </h2>
            <ul className="space-y-5">
              <li>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="flex items-start gap-4 group">
                  <span className="mt-0.5 p-2 border border-gray-200 rounded-full group-hover:border-black transition-colors">
                    <Phone size={15} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Teléfono</p>
                    <p className="text-base font-medium group-hover:underline underline-offset-2">
                      {contactInfo.phone}
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <span className="mt-0.5 p-2 border border-gray-200 rounded-full group-hover:border-black transition-colors">
                    <MessageCircle size={15} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">WhatsApp</p>
                    <p className="text-base font-medium group-hover:underline underline-offset-2">
                      Enviar mensaje
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex items-start gap-4 group">
                  <span className="mt-0.5 p-2 border border-gray-200 rounded-full group-hover:border-black transition-colors">
                    <Mail size={15} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Correo</p>
                    <p className="text-base font-medium group-hover:underline underline-offset-2">
                      {contactInfo.email}
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 p-2 border border-gray-200 rounded-full">
                    <MapPin size={15} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Dirección</p>
                    <p className="text-base leading-snug">{contactInfo.addressFull}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h2 className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-5 flex items-center gap-2">
              <Clock size={13} strokeWidth={1.5} />
              Horario de atención
            </h2>
            <ul className="divide-y divide-gray-100">
              {schedule.map((s) => (
                <li key={s.days} className="flex justify-between py-3 text-sm">
                  <span className="text-gray-600">{s.days}</span>
                  <span className={`font-medium ${s.hours === "Cerrado" ? "text-gray-400" : "text-black"}`}>
                    {s.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social media */}
          <div>
            <h2 className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-5">
              Redes sociales
            </h2>
            <ul className="space-y-4">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.name}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                      <span className="p-2 border border-gray-200 rounded-full group-hover:border-black transition-colors">
                        <Icon />
                      </span>
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">{s.name}</p>
                        <p className="text-sm font-medium group-hover:underline underline-offset-2">
                          {s.handle}
                        </p>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right — map */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xs tracking-[0.2em] uppercase text-gray-400">
            Ubicación
          </h2>
          <div className="w-full flex-1 min-h-[400px] md:min-h-[520px] border border-gray-200 overflow-hidden rounded-sm">
            <iframe
              title="Mapa Valmaz Marketing Digital"
              src={contactInfo.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            {contactInfo.addressFull}
          </p>
        </div>
      </section>

      {/* WhatsApp floating button */}
      <a
        href={`https://wa.me/${contactInfo.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        <MessageCircle size={22} strokeWidth={1.8} />
      </a>
    </main>
  );
}