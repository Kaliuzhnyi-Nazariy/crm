import { Routes } from '@angular/router';

export const ORDERS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./orders-list/orders-list.component').then((m) => m.OrdersListComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./order-details/order-details.component').then((m) => m.OrderDetailsComponent),
  },
];
