import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-sectors',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, CardComponent, ButtonComponent],
  templateUrl: './sectors.component.html',
  styleUrl: './sectors.component.css'
})
export class SectorsComponent {
  sectors = [
    {
      name: 'Residencial',
      description: 'Conjuntos y edificios con alto flujo de residentes y visitantes.',
      bullets: ['Convivencia y seguridad', 'Atención 24/7', 'Cuidado de zonas comunes']
    },
    {
      name: 'Corporativo',
      description: 'Torres empresariales, oficinas y coworkings de alto desempeño.',
      bullets: ['Imagen premium', 'Operación continua', 'Flexibilidad de horarios']
    },
    {
      name: 'Comercial',
      description: 'Locales, centros comerciales y espacios de retail con temporadas dinámicas.',
      bullets: ['Control de tráfico', 'Aseo constante', 'Eventos y campañas visuales']
    }
  ];

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Sectores | Obrato');
    this.meta.updateTag({
      name: 'description',
      content: 'Conoce los sectores en los que Obrato presta servicios integrales.'
    });
  }
}
