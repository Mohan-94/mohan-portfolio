import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <header class="site-nav">
      <a routerLink="/" class="brand"><span></span>MOHAN RAO PULUGULLA</a>
      <nav>
        <a routerLink="/">Home</a>
        <a routerLink="/projects">Projects</a>
        <a routerLink="/publications">Publications</a>
        <a href="/#experience">Experience</a>
        <a href="/#contact">Contact</a>
      </nav>
    </header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
