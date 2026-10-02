import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },
  {
    path: 'coversations',
    loadComponent: () => import('./features/inbox/inbox.component').then((m) => m.InboxComponent),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./features/categories/categories.routes').then((m) => m.CATEGORIES_ROUTES),
  },
  {
    path: 'coupon',
    loadChildren: () => import('./features/coupons/coupons.routes').then((m) => m.COUPONS_ROUTES),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./features/customers/customers.routes').then((m) => m.CUSTOMER_ROUTES),
  },
  {
    path: 'knowledge',
    loadChildren: () =>
      import('./features/knowledge-base/knowledge-base.routes').then(
        (m) => m.KNWOLEDGE_BASE_ROUTES,
      ),
  },
  {
    path: 'orders',
    loadChildren: () => import('./features/orders/orders.routes').then((m) => m.ORDERS_ROUTES),
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./features/pricing/pricing.component').then((m) => m.PricingComponent),
  },
  {
    path: 'products',
    loadChildren: () => import('./features/products/products.routes').then((m) => m.PRODUCT_ROUTES),
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./features/reports/reports.component').then((m) => m.ReportsComponent),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./features/settings/settings.component').then((m) => m.SettingsComponent),
  },
  //   {
  //     path: '',
  //     redirectTo: 'categories',
  //     pathMatch: 'full',
  //   },
];
