export interface BlogSection {
  id: string;
  title: string;
  content: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  sections: BlogSection[];
}
