import { Routes } from '@angular/router';

export const CUSTOMER_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./customers-list/customers-list.component').then((m) => m.CustomersListComponent),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./add-customer/add-customer.component').then((m) => m.AddCustomerComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./customer-details/customer-details.component').then(
        (m) => m.CustomerDetailsComponent,
      ),
  },
];
