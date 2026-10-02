import { Routes } from '@angular/router';

export const KNWOLEDGE_BASE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },
  {
    path: ':id',
    loadComponent: () => import('./details/details.component').then((m) => m.DetailsComponent),
  },
];
