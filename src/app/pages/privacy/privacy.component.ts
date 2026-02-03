import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Privacidad | Obrato');
    this.meta.updateTag({
      name: 'description',
      content: 'Política de privacidad y tratamiento de datos de Obrato.'
    });
  }
}
