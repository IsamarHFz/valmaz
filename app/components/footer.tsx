import type { ReactNode } from "react";

const contactInfo = {
  direccion: "Blvd. Agua Caliente 9955, Calete, 22044 Tijuana, B.C., México",
  telefono: "+52 664 385 2992",
  email: "valmazgroup@gmail.com",
  horario: "Lun - Vie: 9:00 am - 5:00 pm",
};

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/valmazmarketingdigital",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[14px] w-[14px] fill-white/70">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/valmazmarketingdigital",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[14px] w-[14px] fill-none stroke-white/70 stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

function InfoRow({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-[2px] text-white/35">{icon}</span>
      <div className="text-sm leading-relaxed text-white/60">{children}</div>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-12 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="mb-2 font-serif text-2xl tracking-[-0.03em]">Valmaz</p>
            <p className="max-w-xs text-sm leading-relaxed text-white/45">
              Departamento de Marketing Digital y Estrategia Publicitaria.
            </p>
            <div className="mt-5 flex gap-2">
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all hover:border-white/35 hover:bg-white/5"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-[11px] uppercase tracking-[0.24em] text-white/30">
              Contacto
            </h4>
            <div className="grid gap-4 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
              <InfoRow
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[14px] w-[14px] min-w-[14px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                }
              >
                {contactInfo.direccion}
              </InfoRow>

              <InfoRow
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[14px] w-[14px] min-w-[14px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.03 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                }
              >
                <a
                  href={`tel:${contactInfo.telefono.replace(/\D/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {contactInfo.telefono}
                </a>
              </InfoRow>

              <InfoRow
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[14px] w-[14px] min-w-[14px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                }
              >
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="transition-colors hover:text-white"
                >
                  {contactInfo.email}
                </a>
              </InfoRow>

              <InfoRow
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[14px] w-[14px] min-w-[14px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                }
              >
                {contactInfo.horario}
              </InfoRow>
            </div>
          </div>
        </div>

        <div className="mt-8 h-px bg-white/8" />

        <div className="flex flex-col gap-2 py-4 text-xs text-white/25 md:flex-row md:items-center md:justify-between">
          <span>© {currentYear} Valmaz Marketing Digital.</span>
          <span>Tijuana, B.C. · Mexico</span>
        </div>
      </div>
    </footer>
  );
}
