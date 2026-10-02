import { Routes } from '@angular/router';

export const COUPONS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./coupons-list/coupons-list.component').then((m) => m.CouponsListComponent),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./add-coupon/add-coupon.component').then((m) => m.AddCouponComponent),
  },
];
