import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { publications } from './portfolio.data';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="shell inner-page">
      <span class="kicker">PUBLICATIONS</span>
      <h1>Research connecting <em>AI, Java & modern systems.</em></h1>
      <p class="page-lead">Published work spanning machine-learning decision support, cloud-native Java microservices, and NLP-driven conversational systems.</p>
      <div class="pub-list">
        <article *ngFor="let p of publications; let i=index">
          <b>0{{i+1}}</b><div><h2>{{p.title}}</h2><p>{{p.venue}}</p><p *ngIf="p.doi"><strong>DOI:</strong> {{p.doi}}</p>
          <div class="tags"><i *ngFor="let t of p.themes">{{t}}</i></div></div>
        </article>
      </div>
    </main>
  `
})
export class PublicationsComponent { publications = publications; }
