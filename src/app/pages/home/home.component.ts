import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ServicesDataService } from '../../services/services-data.service';
import { CasesDataService } from '../../services/cases-data.service';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { BadgeComponent } from '../../components/badge/badge.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SectionHeaderComponent,
    CardComponent,
    ButtonComponent,
    BadgeComponent,
    ModalComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  services = this.servicesData.getServices();
  cases = this.casesData.getCases().slice(0, 6);
  isModalOpen = false;
  testimonials = [
    {
      name: 'Mariana López',
      role: 'Administradora - Torre Central',
      quote: 'La respuesta del equipo de Obrato es impecable. La coordinación y el seguimiento nos dan tranquilidad.'
    },
    {
      name: 'Carlos Vélez',
      role: 'Gerente de Operaciones - Centro Comercial Nova',
      quote: 'La operación diaria mejoró con indicadores claros. El servicio es constante y profesional.'
    },
    {
      name: 'Lucía Andrade',
      role: 'Head of People - CoWork Vertex',
      quote: 'Su ornamentación elevó la experiencia de nuestros equipos y visitantes. Todo fue puntual.'
    }
  ];
  faqs = [
    {
      q: '¿Cómo se realiza el diagnóstico inicial?',
      a: 'Programamos una visita técnica para entender la operación y proponer un plan a la medida.'
    },
    {
      q: '¿Tienen cobertura nacional?',
      a: 'Contamos con equipos en las principales ciudades y podemos coordinar cobertura regional.'
    },
    {
      q: '¿Cómo gestionan la supervisión?',
      a: 'Asignamos supervisores por zona con reportes semanales y métricas compartidas.'
    },
    {
      q: '¿Puedo contratar varios servicios juntos?',
      a: 'Sí, ofrecemos paquetes integrales para optimizar costos y mejorar la coordinación.'
    },
    {
      q: '¿Qué garantías de calidad ofrecen?',
      a: 'Contamos con protocolos, capacitación continua y auditorías internas de servicio.'
    },
    {
      q: '¿Cómo solicito una cotización?',
      a: 'Completa el formulario de contacto o agenda una llamada desde nuestro equipo comercial.'
    }
  ];

  constructor(
    private servicesData: ServicesDataService,
    private casesData: CasesDataService,
    private title: Title,
    private meta: Meta
  ) {
    this.title.setTitle('Obrato | Servicios integrales premium');
    this.meta.updateTag({
      name: 'description',
      content: 'Soluciones profesionales de ornamentación, conserjería, jardinería y servicios generales.'
    });
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
