import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesDataService } from '../../services/services-data.service';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, CardComponent, ButtonComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = this.servicesData.getServices();

  constructor(private servicesData: ServicesDataService, private title: Title, private meta: Meta) {
    this.title.setTitle('Servicios | Obrato');
    this.meta.updateTag({
      name: 'description',
      content: 'Descubre nuestros servicios de ornamentación, conserjería, jardinería y apoyo operativo.'
    });
  }
}
