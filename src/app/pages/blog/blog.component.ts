import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { CardComponent } from '../../components/card/card.component';
import { BadgeComponent } from '../../components/badge/badge.component';
import { ButtonComponent } from '../../components/button/button.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule, SectionHeaderComponent, CardComponent, BadgeComponent, ButtonComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  posts = this.blogService.getPosts();
  tags = this.blogService.getTags();
  search = '';
  selectedTag = 'Todos';

  constructor(private blogService: BlogService, private title: Title, private meta: Meta) {
    this.title.setTitle('Blog | Obrato');
    this.meta.updateTag({
      name: 'description',
      content: 'Tendencias y buenas prácticas en servicios integrales.'
    });
  }

  get filteredPosts() {
    return this.posts.filter((post) => {
      const matchesTag = this.selectedTag === 'Todos' || post.tags.includes(this.selectedTag);
      const matchesSearch = post.title.toLowerCase().includes(this.search.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }

  selectTag(tag: string): void {
    this.selectedTag = tag;
  }
}
