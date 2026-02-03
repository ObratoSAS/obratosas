import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, ButtonComponent, SectionHeaderComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('404 | Obrato');
    this.meta.updateTag({
      name: 'description',
      content: 'Página no encontrada.'
    });
  }
}
