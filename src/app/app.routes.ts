import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./views/home/home.component').then(c => c.HomeComponent),
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./views/about/about.component').then(c => c.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./views/contact/contact.component').then(c => c.ContactComponent),
  },
  {
    path: 'my-work',
    loadComponent: () =>
      import('./views/my-work/my-work.component').then(c => c.MyWorkComponent),
  },
  {
    // Invalid route - redirect to default home
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
