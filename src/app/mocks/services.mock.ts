import { Service } from '../models/service.model';

export const SERVICES: Service[] = [
  {
    id: 1,
    slug: 'ornamentacion',
    name: 'Ornamentación',
    summary: 'Ambientación cuidada para fechas especiales, eventos internos y espacios corporativos con identidad única.',
    highlights: ['Diseño temático por temporada', 'Montaje y desmontaje sin fricciones', 'Materiales premium y sostenibles'],
    includes: ['Levantamiento de necesidades', 'Propuesta visual', 'Montaje, logística y desmontaje'],
    idealFor: ['Lobbies de edificios', 'Oficinas corporativas', 'Centros comerciales'],
    benefits: ['Mejor experiencia para residentes y visitantes', 'Imagen coherente con la marca', 'Ejecución rápida y segura'],
    delivery: ['Equipo creativo + operativo', 'Cronograma flexible', 'Supervisión permanente'],
    checklist: ['Plan de ambientación', 'Inventario de piezas', 'Checklist de montaje', 'Reporte fotográfico']
  },
  {
    id: 2,
    slug: 'conserjeria',
    name: 'Conserjería',
    summary: 'Control de acceso, recepción y atención profesional con protocolos claros y seguimiento permanente.',
    highlights: ['Registro digital de visitantes', 'Protocolos de seguridad', 'Atención bilingüe opcional'],
    includes: ['Control de ingreso', 'Recepción de paquetería', 'Reporte diario de novedades'],
    idealFor: ['Conjuntos residenciales', 'Torres corporativas', 'Oficinas con alto flujo'],
    benefits: ['Mayor seguridad percibida', 'Comunicación centralizada', 'Respuesta rápida ante incidentes'],
    delivery: ['Turnos 24/7 o flexibles', 'Capacitación continua', 'Supervisión por zona'],
    checklist: ['Manual operativo', 'Capacitación inicial', 'Bitácora digital', 'Indicadores semanales']
  },
  {
    id: 3,
    slug: 'jardineria',
    name: 'Jardinería',
    summary: 'Mantenimiento técnico de zonas verdes, riego, poda y diseño para espacios saludables y vibrantes.',
    highlights: ['Planes de riego eficientes', 'Diseño de paisajismo', 'Control fitosanitario'],
    includes: ['Poda y perfilado', 'Fertilización programada', 'Diseño y renovación de jardines'],
    idealFor: ['Conjuntos residenciales', 'Parques empresariales', 'Zonas comunes'],
    benefits: ['Espacios verdes saludables', 'Ahorro de agua', 'Imagen premium del entorno'],
    delivery: ['Visitas programadas', 'Calendario de mantenimiento', 'Registro fotográfico'],
    checklist: ['Diagnóstico técnico', 'Plan de mantenimiento', 'Reporte mensual', 'Recomendaciones de mejora']
  },
  {
    id: 4,
    slug: 'servicios-generales',
    name: 'Servicios Generales',
    summary: 'Aseo, apoyo operativo y mantenimiento básico para mantener la operación diaria impecable.',
    highlights: ['Personal polivalente', 'Protocolos de bioseguridad', 'Cobertura flexible'],
    includes: ['Aseo de áreas comunes', 'Apoyo logístico', 'Mantenimiento básico'],
    idealFor: ['Edificios corporativos', 'Retail y comercio', 'Oficinas administrativas'],
    benefits: ['Ambientes limpios y seguros', 'Operación continua', 'Reducción de incidencias'],
    delivery: ['Turnos por demanda', 'Supervisión diaria', 'Reposición de insumos'],
    checklist: ['Checklist de limpieza', 'Control de inventario', 'Reporte de novedades', 'Indicadores de servicio']
  }
];
