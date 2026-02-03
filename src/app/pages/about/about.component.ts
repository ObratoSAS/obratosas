import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, CardComponent, ButtonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  values = ['Excelencia operativa', 'Cercanía con el cliente', 'Transparencia', 'Sostenibilidad'];
  team = [
    { name: 'Valentina Rojas', role: 'Directora de Operaciones' },
    { name: 'Julián Pardo', role: 'Líder de Conserjería' },
    { name: 'Laura Méndez', role: 'Jardinería & Paisajismo' },
    { name: 'Santiago Peña', role: 'Servicios Generales' }
  ];

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Nosotros | Obrato');
    this.meta.updateTag({
      name: 'description',
      content: 'Conoce la historia, misión y valores de Obrato.'
    });
  }
}
