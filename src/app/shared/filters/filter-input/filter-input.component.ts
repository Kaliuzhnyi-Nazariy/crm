import { isPlatformBrowser } from '@angular/common';
import { Component, effect, inject, input, output, PLATFORM_ID, signal } from '@angular/core';
import { Search } from '@primeicons/angular/search';

@Component({
  imports: [Search],
  selector: 'app-filter-input',
  styles: ``,
  templateUrl: './filter-input.component.html',
})
export class FilterInputComponent {
  input = signal<string>('');
  searchParamKey = input<string>('search');

  onInputChange(value: string) {
    this.input.set(value);
  }
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const initialParams = new URLSearchParams(window.location.search);
      const initialSearch = initialParams.get(this.searchParamKey());
      if (initialSearch) {
        this.input.set(initialSearch);
      }

      effect(() => {
        const searchValue = this.input();
        const paramKey = this.searchParamKey();

        const currentParams = new URLSearchParams(window.location.search);

        if (searchValue.trim() !== '') {
          currentParams.set(paramKey, searchValue);
        } else {
          currentParams.delete(paramKey);
        }

        window.history.replaceState(
          {},
          '',
          `${window.location.pathname}?${currentParams.toString()}`,
        );
      });
    }
  }
}
