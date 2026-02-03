import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesDataService } from '../../services/cases-data.service';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { CardComponent } from '../../components/card/card.component';
import { BadgeComponent } from '../../components/badge/badge.component';
import { ButtonComponent } from '../../components/button/button.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-cases',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, CardComponent, BadgeComponent, ButtonComponent],
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.css'
})
export class CasesComponent {
  cases = this.casesData.getCases();
  filters = [
    { label: 'Todos', value: 'all' },
    { label: 'Ornamentación', value: 'ornamentacion' },
    { label: 'Jardinería', value: 'jardineria' },
    { label: 'Conserjería', value: 'conserjeria' },
    { label: 'Generales', value: 'servicios-generales' }
  ];
  activeFilter = 'all';

  constructor(private casesData: CasesDataService, private title: Title, private meta: Meta) {
    this.title.setTitle('Casos | Obrato');
    this.meta.updateTag({
      name: 'description',
      content: 'Explora casos de éxito de Obrato en distintos sectores.'
    });
  }

  get filteredCases() {
    if (this.activeFilter === 'all') {
      return this.cases;
    }
    return this.cases.filter((item) => item.category === this.activeFilter);
  }

  setFilter(value: string): void {
    this.activeFilter = value;
  }
}
