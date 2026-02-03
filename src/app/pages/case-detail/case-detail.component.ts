import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CasesDataService } from '../../services/cases-data.service';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { BadgeComponent } from '../../components/badge/badge.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-case-detail',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, BadgeComponent, ButtonComponent, CardComponent],
  templateUrl: './case-detail.component.html',
  styleUrl: './case-detail.component.css'
})
export class CaseDetailComponent {
  caseItem = this.casesData.getCaseById(Number(this.route.snapshot.paramMap.get('id')));
  selectedImage = this.caseItem?.gallery[0];

  constructor(
    private route: ActivatedRoute,
    private casesData: CasesDataService,
    private title: Title,
    private meta: Meta
  ) {
    if (this.caseItem) {
      this.title.setTitle(`${this.caseItem.title} | Obrato`);
      this.meta.updateTag({
        name: 'description',
        content: this.caseItem.summary
      });
    }
  }

  setImage(image: string): void {
    this.selectedImage = image;
  }
}
