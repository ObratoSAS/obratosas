export interface CaseStudy {
  id: number;
  title: string;
  category: 'ornamentacion' | 'conserjeria' | 'jardineria' | 'servicios-generales';
  sector: string;
  location: string;
  summary: string;
  tags: string[];
  results: string[];
  gallery: string[];
}
