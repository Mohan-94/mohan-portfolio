import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContactService } from './contact.service';
import { projects, publications } from './portfolio.data';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
  <main>
    <section class="hero shell">
      <div class="hero-copy">
        <span class="eyebrow">● Open to AI · Data · Analytics · Software Engineering opportunities</span>
        <h1>BUILDING WITH <span>AI + DATA</span><br>AND CODE.</h1>
        <p>I’m Mohan Rao Pulugulla — a software and analytics professional combining Java/Spring engineering, applied statistics, data science, and Generative AI evaluation.</p>
        <div class="actions">
          <a class="button primary" routerLink="/projects">Explore my work ↓</a>
          <a class="button secondary" href="mailto:mohan467j@gmail.com">Contact me ↗</a>
        </div>
        <div class="quick-stats">
          <div><strong>5+ yrs</strong><small>Software & analytical experience</small></div>
          <div><strong>3</strong><small>Research publications</small></div>
          <div><strong>1.2M+</strong><small>Research observations</small></div>
          <div><strong>AI + Java</strong><small>Engineering crossover</small></div>
        </div>
      </div>
      <div class="photo-zone">
        <div class="blob one"></div><div class="blob two"></div>
        <div class="photo-card"><img src="assets/mohan-headshot.jpeg" alt="Mohan Rao Pulugulla"></div>
        <span class="sticker s1">JAVA ☕</span>
        <span class="sticker s2">AI ✦</span>
        <span class="sticker s3">DATA + ANALYTICS</span>
      </div>
    </section>

    <section class="marquee"><div>JAVA · SPRING BOOT · PYTHON · SQL · GENERATIVE AI · DATA SCIENCE · STATISTICS · CLOUD · ANALYTICS · REST APIs ·</div></section>

    <section class="shell section">
      <div class="section-title"><div><span class="kicker">01 / About</span><h2>Engineer by foundation.<br><em>Analytical by training.</em></h2></div>
      <p>I work at the intersection of software engineering, AI evaluation, quantitative research and data-driven decision making. That means I can move from system requirements to APIs, from raw data to statistical evidence, and from AI outputs to rigorous evaluation.</p></div>
      <div class="focus-grid">
        <article><b>01</b><h3>AI & LLM Evaluation</h3><p>Benchmark design, rubric development, model failure analysis, factuality and instruction adherence.</p></article>
        <article><b>02</b><h3>Data Science</h3><p>Statistical modeling, survival analysis, Python/R workflows and evidence-based research.</p></article>
        <article><b>03</b><h3>Software Engineering</h3><p>Java, Spring Boot, REST APIs, relational data, testing and backend systems.</p></article>
        <article><b>04</b><h3>Analytics</h3><p>Data validation, reporting, dashboards, operational insights and decision support.</p></article>
      </div>
    </section>

    <section class="shell section">
      <div class="section-title compact"><div><span class="kicker">02 / Selected Work</span><h2>Projects with <em>range.</em></h2></div><a routerLink="/projects">View all →</a></div>
      <div class="cards">
        <article class="project" *ngFor="let p of projects.slice(0,4)">
          <span>{{p.type}}</span><h3>{{p.title}}</h3><p>{{p.description}}</p>
          <div class="tags"><i *ngFor="let t of p.tech">{{t}}</i></div>
        </article>
      </div>
    </section>

    <section id="experience" class="shell section">
      <div class="section-title"><div><span class="kicker">03 / Professional Experience</span><h2>Across software, data,<br><em>analytics & AI.</em></h2></div></div>
      <div class="timeline">
        <article><time>2026</time><div><h3>Axle IT Inc.</h3><strong>Software Analyst</strong><p>System requirements, data-flow analysis, SQL, backend application analysis, integration, testing, functional specifications and defect documentation.</p></div></article>
        <article><time>Recent</time><div><h3>Guardian’s Embrace</h3><strong>Data, Analytics & Technology Leadership</strong><p>Led a six-person analyst/developer team supporting automated data workflows, donor intelligence and financial-performance dashboards.</p><p class="project-line">Project: Cloud-Based Donor Intelligence & Financial Analytics Platform</p></div></article>
        <article><time>2023–2024</time><div><h3>Western Illinois University · Campus Recreation</h3><strong>Data Analyst Graduate Assistant</strong><p>Operational analytics, data cleaning and validation, reporting, visualizations and stakeholder communication.</p></div></article>
        <article><time>2022</time><div><h3>EnterpriseMinds India Pvt Ltd</h3><strong>Software Engineering</strong><p>Java/Spring enterprise development using REST services, Hibernate/JPA, SQL, AWS, Docker, Maven, Jenkins and testing tools.</p><p class="project-line">Project: Stride Inc.</p></div></article>
        <article><time>Earlier</time><div><h3>Inspirisys Solutions</h3><strong>Software Engineering</strong><p>Enterprise application development, Java-oriented systems, integration and production-focused engineering.</p></div></article>
        <article><time>Earlier</time><div><h3>Teramatic</h3><strong>Software / Technology Experience</strong><p>Software-focused technical delivery contributing to the broader engineering career path.</p></div></article>
        <article><time>Earlier</time><div><h3>Primesoft · Hyderabad</h3><strong>Java Development</strong><p>Java application development, debugging, testing, requirements interpretation and software delivery.</p></div></article>
        <article><time>Project-based</time><div><h3>Generative AI Evaluation & Benchmarking</h3><strong>Independent Technical AI Evaluation</strong><p>Prompt design, grading rubrics, reference solutions, adversarial edge cases, deterministic verification and model-failure analysis.</p></div></article>
      </div>
    </section>

    <section class="shell section pub-preview">
      <div class="section-title compact"><div><span class="kicker">04 / Publications</span><h2>Research that connects<br><em>AI, data & engineering.</em></h2></div><a routerLink="/publications">All publications →</a></div>
      <div class="publication-row" *ngFor="let p of publications">
        <div><h3>{{p.title}}</h3><p>{{p.venue}}</p></div><span>{{p.themes.join(' · ')}}</span>
      </div>
    </section>

    <section class="shell section">
      <div class="section-title"><div><span class="kicker">05 / Technical Toolkit</span><h2>Tools I use to<br><em>solve problems.</em></h2></div></div>
      <div class="skill-cloud">
        <span>Java</span><span>Spring Boot</span><span>Spring MVC</span><span>REST APIs</span><span>Hibernate/JPA</span><span>SQL</span><span>Python</span><span>Pandas</span><span>NumPy</span><span>R</span><span>SAS</span><span>Survival Analysis</span><span>LLM Evaluation</span><span>Prompt Engineering</span><span>Docker</span><span>AWS</span><span>Git</span><span>JUnit</span><span>Pytest</span><span>Data Validation</span>
      </div>
    </section>

    <section id="contact" class="contact section">
      <div class="shell contact-grid">
        <div><span class="kicker">06 / Contact</span><h2>Have an opportunity<br>where <em>technology meets data?</em></h2>
        <p>I'm interested in software engineering, AI evaluation, data science, analytics and hybrid technical roles.</p>
        <p><a href="mailto:mohan467j@gmail.com">mohan467j&#64;gmail.com</a><br>
        <a href="https://www.linkedin.com/in/mohan-rao-pulugulla-5a8b81114/" target="_blank">LinkedIn ↗</a></p></div>
        <form (ngSubmit)="send()" #f="ngForm">
          <input name="name" [(ngModel)]="form.name" placeholder="Your name" required>
          <input name="email" [(ngModel)]="form.email" placeholder="Email" type="email" required>
          <textarea name="message" [(ngModel)]="form.message" placeholder="Message" rows="5" required></textarea>
          <button class="button primary" [disabled]="sending || f.invalid">{{sending ? 'Sending…' : 'Send message →'}}</button>
          <p class="form-status" *ngIf="status">{{status}}</p>
        </form>
      </div>
    </section>
  </main>
  `,
})
export class HomeComponent {
  projects = projects;
  publications = publications;
  form = { name: '', email: '', message: '' };
  sending = false;
  status = '';

  constructor(private contact: ContactService) {}

  send() {
    this.sending = true;
    this.status = '';
    this.contact.send(this.form).subscribe({
      next: () => {
        this.status = 'Thanks — your message was received.';
        this.form = { name: '', email: '', message: '' };
        this.sending = false;
      },
      error: () => {
        this.status = 'The local API is not running yet. You can email me directly at mohan467j@gmail.com.';
        this.sending = false;
      }
    });
  }
}
