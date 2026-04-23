export type ServiceItem = {
  slug: string;
  title: string;
  image: string;
  listingDescription: string;
  featured: boolean;
  intro: string;
  description: string;
};

export const services: ServiceItem[] = [
  {
    slug: "sitios-web",
    title: "Sitio Web",
    image: "/hero.jpg",
    listingDescription: "Sitios web profesionales alineados con los objetivos de tu empresa.",
    featured: true,
    intro:
      "Nos encargamos de realizar un sitio web profesional para que cumpla los objetivos establecidos, acorde a la imagen de la empresa.",
    description:
      "Desarrollamos sitios web profesionales pensados para representar correctamente a tu empresa en internet. Cada proyecto se trabaja para mantener coherencia con la imagen de la marca y responder a los objetivos establecidos.",
  },
  {
    slug: "marketing-digital",
    title: "Plan de Marketing Digital",
    image: "/marketing.jpg",
    listingDescription: "Estrategia de marketing orientada a metas y crecimiento comercial.",
    featured: true,
    intro:
      "Acompañaamos a tu empresa en el proceso completo para lograr las metas propuestas a través de estrategias de marketing con mayor relevancia.",
    description:
      "Desarrollamos planes de marketing digital para orientar acciones, prioridades y objetivos de comunicación. El enfoque es acompañar a cada empresa con una estrategia clara que ayude a fortalecer su presencia digital y sus resultados comerciales.",
  },
  {
    slug: "diseno-grafico",
    title: "Diseño Gráfico",
    image: "/diseño-grafico.jpg",
    listingDescription: "Arte funcional y estético enfocado al marketing de tu marca.",
    featured: false,
    intro:
      "Plasmamos tu mensaje de manera visual a traves de arte funcional y sumamente estético, enfocado al marketing.",
    description:
      "Creamos materiales gráficos que ayudan a comunicar de manera clara y atractiva el mensaje de tu marca. Cada pieza se desarrolla con un enfoque visual funcional, estético y alineado a objetivos de marketing.",
  },
  {
    slug: "fotografia",
    title: "Fotografía",
    image: "/photo-camera.jpg",
    listingDescription: "Imágenes llamativas para mostrar productos, empresas y personal.",
    featured: false,
    intro:
      "Captamos lo mejor de tus productos, empresa y personal a traves de nuestro lente, para transmitirlo en una imagen llamativa.",
    description:
      "Realizamos fotografía para resaltar lo mejor de tu empresa, tus productos y tu equipo. El objetivo es proyectar una imagen atractiva y profesional que fortalezca la comunicación visual de tu negocio.",
  },
  {
    slug: "marketing-redes-sociales",
    title: "Marketing en Redes Sociales",
    image: "/redes-sociales.jpg",
    listingDescription: "Estrategias creativas para posicionamiento de marca y prospectos.",
    featured: true,
    intro:
      "Nos dedicamos a desarrollar estrategias creativas que generan resultados de posicionamiento de marca y atracción de prospectos para tu negocio.",
    description:
      "Trabajamos estrategias de redes sociales, así como Facebook, Instagram y Google ADS orientadas al posicionamiento de marca y a la atracción de prospectos. El contenido y la gestión se enfocan en comunicar con claridad, fortalecer la presencia digital y generar oportunidades para tu negocio.",
  },
  {
    slug: "produccion-de-video",
    title: "Producción de Video",
    image: "/estudio.jpg",
    listingDescription: "Vídeos creativos para comunicar el mensaje de tu empresa.",
    featured: false,
    intro:
      "Transmitimos el mensaje indicado para comunicar lo que tus clientes necesitan saber sobre tu empresa a través de videos creativos.",
    description:
      "Producimos vídeos creativos para comunicar de forma clara lo que tu empresa quiere transmitir. El contenido audiovisual se desarrolla para mostrar información relevante y conectar mejor con tus clientes.",
  },
  {
    slug: "produccion-de-podcast",
    title: "Producción de Podcast",
    image: "/microfono.jpg",
    listingDescription: "Producción profesional de podcast para comunicar tu mensaje.",
    featured: false,
    intro:
      "Proporcionamos herramientas y conocimientos para la produccion de un podcast que transmita tu mensaje de manera profesional.",
    description:
      "Apoyamos la producción de podcasts con herramientas y conocimientos que permiten desarrollar un contenido profesional. El objetivo es ayudarte a transmitir tu mensaje con claridad y buena calidad de presentación.",
  },
];

export const featuredServices = services.filter((service) => service.featured).slice(0, 3);

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
