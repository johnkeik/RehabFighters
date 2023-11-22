import { ExtraOptions, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { CommonInjuriesComponent } from './components/common-injuries/common-injuries.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'commonInjuries',
    component: CommonInjuriesComponent,
  },
  {
    path: 'faqs',
    component: ContactComponent,
  },
];

export const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};
