import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./views/home/home.component').then(m => m.HomeComponent),
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./views/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./views/contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: 'my-work',
    loadComponent: () =>
      import('./views/my-work/my-work.component').then(m => m.MyWorkComponent),
  },
  {
    // Invalid route - redirect to default home
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
