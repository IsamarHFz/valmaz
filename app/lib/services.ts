export type ServiceItem = {
  slug: string;
  title: string;
  image: string;
  listingDescription: string;
  featured: boolean;
};

export const services: ServiceItem[] = [
  {
    slug: "sitios-web",
    title: "Sitios Web",
    image: "/hero.jpg",
    listingDescription:
      "Diseño y desarrollo de páginas profesionales.",
    featured: true,
  },
  {
    slug: "marketing-digital",
    title: "Plan de Marketing Digital",
    image: "/marketing.jpg",
    listingDescription:"Estrategia integral para tu negocio.",

    featured: true,
  },
  {
    slug: "diseno-grafico",
    title: "Diseño Gráfico",
    image: "/diseño-grafico.jpg",
    listingDescription: "Soluciones visuales para tu marca.",
    featured: false,
  },
  {
    slug: "fotografia",
    title: "Fotografía",
    image: "/photo-camera.jpg",
    listingDescription:
      "Sesiones profesionales para tu marca.",
    featured: false,
  },
  {
    slug: "marketing-redes-sociales",
    title: "Marketing en Redes Sociales",
    image: "/redes-sociales.jpg",
    listingDescription:
      "Facebook, Instagram, Google Ads.",
    featured: true,
  },
  {
    slug: "produccion-de-video",
    title: "Produccion de Video",
    image: "/estudio.jpg",
    listingDescription:
      "Videos corporativos y promocionales.",
    featured: false,
  },
  {
    slug: "produccion-de-podcast",
    title: "Produccion de Podcast",
    image: "/microfono.jpg",
    listingDescription:
      "Grabación, edición y distribución. ",
    featured: false,
  },
];

export const featuredServices = services.filter((service) => service.featured).slice(0, 3);
