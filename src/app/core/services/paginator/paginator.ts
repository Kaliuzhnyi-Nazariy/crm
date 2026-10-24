import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class Paginator {
  private platformId = inject(PLATFORM_ID);

  page = signal<number>(1);
  perPage = signal<number>(10);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const urlParams = new URLSearchParams(window.location.search);

      const p = Number(urlParams.get('page')) || 1;
      const pp = Number(urlParams.get('perPage')) || 10;

      this.page.set(p);
      this.perPage.set(pp);
    }

    effect(() => {
      const currentPage = this.page();
      const currentPerPage = this.perPage();

      if (isPlatformBrowser(this.platformId)) {
        const urlParams = new URLSearchParams(window.location.search);

        if (
          Number(urlParams.get('page')) !== currentPage ||
          Number(urlParams.get('perPage')) !== currentPerPage
        ) {
          urlParams.set('page', currentPage.toString());
          urlParams.set('perPage', currentPerPage.toString());

          window.history.replaceState(
            {},
            '',
            `${window.location.pathname}?${urlParams.toString()}`,
          );
        }
      }
    });
  }

  getParams = () => {
    return { page: this.page(), perPage: this.perPage() };
  };
}
