import { Injectable } from '@angular/core';
import { BLOG_POSTS } from '../mocks/blog.mock';
import { BlogPost } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  getPosts(): BlogPost[] {
    return BLOG_POSTS;
  }

  getPostBySlug(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find((post) => post.slug === slug);
  }

  getTags(): string[] {
    return Array.from(new Set(BLOG_POSTS.flatMap((post) => post.tags)));
  }
}
