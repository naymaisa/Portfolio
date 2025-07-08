import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';

export const routes: Routes = [
  { path: 'sobre', component: AboutComponent },
  { path: 'projetos', component: SkillsComponent },
  { path: 'contato', component: ContactComponent }
];
