import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ServicesDataService } from '../../services/services-data.service';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeaderComponent, ButtonComponent, CardComponent],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent {
  service = this.servicesData.getServiceBySlug(this.route.snapshot.paramMap.get('slug') ?? '');

  constructor(
    private route: ActivatedRoute,
    private servicesData: ServicesDataService,
    private title: Title,
    private meta: Meta
  ) {
    if (this.service) {
      this.title.setTitle(`${this.service.name} | Obrato`);
      this.meta.updateTag({
        name: 'description',
        content: this.service.summary
      });
    }
  }
}
