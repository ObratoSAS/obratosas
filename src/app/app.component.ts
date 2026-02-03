import { Component, Renderer2 } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showScrollTop = false;

  constructor(private router: Router, private renderer: Renderer2) {
    const savedTheme = localStorage.getItem('obrato-theme');
    if (savedTheme === 'dark') {
      this.renderer.addClass(document.body, 'theme-dark');
    }

    this.router.events.pipe(filter((event) => event.constructor.name === 'NavigationEnd')).subscribe(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
      this.showScrollTop = window.scrollY > 400;
    });
  }

  toggleTheme(): void {
    const isDark = document.body.classList.toggle('theme-dark');
    localStorage.setItem('obrato-theme', isDark ? 'dark' : 'light');
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
