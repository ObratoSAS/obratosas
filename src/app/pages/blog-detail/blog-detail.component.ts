import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { BadgeComponent } from '../../components/badge/badge.component';
import { ButtonComponent } from '../../components/button/button.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeaderComponent, BadgeComponent, ButtonComponent],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
  post = this.blogService.getPostBySlug(this.route.snapshot.paramMap.get('slug') ?? '');

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private title: Title,
    private meta: Meta
  ) {
    if (this.post) {
      this.title.setTitle(`${this.post.title} | Obrato`);
      this.meta.updateTag({
        name: 'description',
        content: this.post.excerpt
      });
    }
  }
}
