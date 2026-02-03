import { BlogPost } from '../models/blog.model';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'tendencias-ornamentacion-2026',
    title: 'Tendencias en ornamentación corporativa 2026',
    date: '2026-01-18',
    readTime: '6 min',
    tags: ['Ornamentación', 'Experiencia', 'Branding'],
    excerpt: 'Cómo crear espacios memorables sin perder eficiencia operativa.',
    sections: [
      {
        id: 'ambientacion-emocional',
        title: 'Ambientación emocional y funcional',
        content: [
          'Las empresas buscan espacios que conecten con residentes y visitantes sin saturar los ambientes.',
          'La clave está en combinar materiales sostenibles, iluminación estratégica y paletas coherentes con la marca.'
        ]
      },
      {
        id: 'temporadas',
        title: 'Calendarios de temporada bien planificados',
        content: [
          'Un calendario anual evita improvisación, reduce costos y permite activar campañas internas.',
          'Obrato propone microambientaciones que mantienen la frescura sin elevar el presupuesto.'
        ]
      },
      {
        id: 'medicion',
        title: 'Medir impacto en percepción',
        content: [
          'Las métricas de satisfacción ayudan a ajustar diseños y optimizar el inventario.',
          'El feedback cualitativo es vital para mantener coherencia en ambientes premium.'
        ]
      }
    ]
  },
  {
    slug: 'protocolos-conserjeria-segura',
    title: 'Protocolos de conserjería segura en edificios modernos',
    date: '2026-02-02',
    readTime: '5 min',
    tags: ['Conserjería', 'Seguridad', 'Operación'],
    excerpt: 'Buenas prácticas para mejorar el control de acceso y la atención al visitante.',
    sections: [
      {
        id: 'accesos',
        title: 'Control de accesos inteligente',
        content: [
          'La digitalización de registros facilita trazabilidad y evita colas en momentos de alto flujo.',
          'Implementar filtros de seguridad por tipo de visitante mejora la confianza en la operación.'
        ]
      },
      {
        id: 'entrenamiento',
        title: 'Capacitación y protocolo de servicio',
        content: [
          'Un equipo entrenado en comunicación asertiva y manejo de conflictos reduce incidentes.',
          'La supervisión continua permite mantener la consistencia del servicio.'
        ]
      },
      {
        id: 'indicadores',
        title: 'Indicadores que importan',
        content: [
          'Tiempo de respuesta, incidentes y feedback del residente son métricas claves.',
          'Con reportes semanales se toman decisiones rápidas y basadas en datos.'
        ]
      }
    ]
  },
  {
    slug: 'jardines-eficientes-ciudades',
    title: 'Jardines eficientes para ciudades en crecimiento',
    date: '2026-02-20',
    readTime: '7 min',
    tags: ['Jardinería', 'Sostenibilidad', 'Paisajismo'],
    excerpt: 'Cómo cuidar zonas verdes con menor consumo de agua y mayor impacto visual.',
    sections: [
      {
        id: 'diagnostico',
        title: 'Diagnóstico y selección de especies',
        content: [
          'Elegir especies nativas reduce el consumo de recursos y facilita el mantenimiento.',
          'El diagnóstico inicial define el plan de fertilización y riego ideal.'
        ]
      },
      {
        id: 'riego',
        title: 'Riego inteligente',
        content: [
          'Los sistemas automatizados permiten riego nocturno y optimizan el uso del agua.',
          'El monitoreo semanal evita estrés hídrico y mejora el color de las zonas verdes.'
        ]
      },
      {
        id: 'mantenimiento',
        title: 'Rutinas de mantenimiento bien coordinadas',
        content: [
          'Las rutinas por temporada ayudan a prevenir plagas y mantener el jardín saludable.',
          'La limpieza y poda planificada mantienen la estética en todo momento.'
        ]
      }
    ]
  }
];
