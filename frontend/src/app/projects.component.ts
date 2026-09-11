import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projects } from './portfolio.data';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="shell inner-page">
      <span class="kicker">PROJECTS</span>
      <h1>Work across <em>engineering, AI & data.</em></h1>
      <p class="page-lead">A curated set of projects demonstrating backend development, research, AI evaluation and analytics leadership.</p>
      <div class="cards">
        <article class="project" *ngFor="let p of projects">
          <span>{{p.type}}</span><h3>{{p.title}}</h3><p>{{p.description}}</p>
          <div class="tags"><i *ngFor="let t of p.tech">{{t}}</i></div>
        </article>
      </div>
    </main>
  `
})
export class ProjectsComponent { projects = projects; }
