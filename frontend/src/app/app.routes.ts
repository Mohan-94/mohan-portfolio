import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProjectsComponent } from './projects.component';
import { PublicationsComponent } from './publications.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: '**', redirectTo: '' }
];
