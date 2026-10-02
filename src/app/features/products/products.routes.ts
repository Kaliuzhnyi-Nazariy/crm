import { Routes } from '@angular/router';

export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./products-list/products-list.component').then((m) => m.ProductsListComponent),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./add-product/add-product.component').then((m) => m.AddProductComponent),
  },
  {
    path: 'update',
    loadComponent: () =>
      import('./update-product/update-product.component').then((m) => m.UpdateProductComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./product-details/product-details.component').then((m) => m.ProductDetailsComponent),
  },
];
