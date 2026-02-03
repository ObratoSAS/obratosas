import { CaseStudy } from '../models/case.model';

const PLACEHOLDER = 'assets/placeholder.svg';

export const CASES: CaseStudy[] = [
  {
    id: 101,
    title: 'Renovación de lobby residencial en temporada navideña',
    category: 'ornamentacion',
    sector: 'Residencial',
    location: 'Bogotá',
    summary: 'Ambientación completa del lobby y zonas comunes con montaje nocturno para no afectar el flujo de residentes.',
    tags: ['Antes/Después', 'Navidad', 'Residencial'],
    results: ['+35% satisfacción en encuesta interna', 'Tiempo de montaje en 6 horas', 'Materiales reutilizables'],
    gallery: [PLACEHOLDER, PLACEHOLDER, PLACEHOLDER]
  },
  {
    id: 102,
    title: 'Control de accesos inteligente para torre corporativa',
    category: 'conserjeria',
    sector: 'Corporativo',
    location: 'Medellín',
    summary: 'Implementación de protocolos de recepción y registro digital de visitantes con reportes diarios.',
    tags: ['Conserjería', 'Seguridad', 'Corporativo'],
    results: ['Reducción del 40% en tiempos de espera', '0 incidentes de acceso no autorizado', 'Reportes en tiempo real'],
    gallery: [PLACEHOLDER, PLACEHOLDER]
  },
  {
    id: 103,
    title: 'Plan de jardinería sostenible en parque empresarial',
    category: 'jardineria',
    sector: 'Corporativo',
    location: 'Cali',
    summary: 'Rediseño de zonas verdes con riego eficiente y selección de especies adaptadas al clima.',
    tags: ['Jardinería', 'Sostenible', 'Paisajismo'],
    results: ['Ahorro de agua del 20%', 'Mejora del paisaje en 4 semanas', 'Mantenimiento mensual optimizado'],
    gallery: [PLACEHOLDER, PLACEHOLDER]
  },
  {
    id: 104,
    title: 'Servicios generales para centro comercial',
    category: 'servicios-generales',
    sector: 'Comercial',
    location: 'Barranquilla',
    summary: 'Cobertura de aseo y apoyo operativo en horarios extendidos durante temporada alta.',
    tags: ['Operación', 'Comercial', 'Aseo'],
    results: ['Indicadores de limpieza en 98%', 'Cobertura 7x24', 'Mejora en percepción de clientes'],
    gallery: [PLACEHOLDER, PLACEHOLDER]
  },
  {
    id: 105,
    title: 'Ambientación corporativa para evento de marca',
    category: 'ornamentacion',
    sector: 'Corporativo',
    location: 'Bogotá',
    summary: 'Diseño de ambientación con paleta corporativa y montaje express en 24 horas.',
    tags: ['Evento', 'Corporativo', 'Branding'],
    results: ['Evento con asistencia récord', 'Montaje sin interrupciones', 'Feedback positivo del equipo'],
    gallery: [PLACEHOLDER, PLACEHOLDER]
  },
  {
    id: 106,
    title: 'Conserjería premium para conjunto residencial',
    category: 'conserjeria',
    sector: 'Residencial',
    location: 'Pereira',
    summary: 'Servicio de atención y registro con enfoque en experiencia del residente.',
    tags: ['Residencial', 'Atención', 'Protocolos'],
    results: ['NPS 92', 'Bitácora digital unificada', 'Capacitación trimestral'],
    gallery: [PLACEHOLDER, PLACEHOLDER]
  }
];
