import { isPlatformBrowser } from '@angular/common';
import { Component, effect, inject, input, PLATFORM_ID, signal } from '@angular/core';
import { AngleDown } from '@primeicons/angular/angle-down';

type FilterType = 'cutomer' | 'order' | 'date' | 'total';

@Component({
  imports: [AngleDown],
  selector: 'app-filter-dropdown',
  styles: ``,
  templateUrl: './filter-dropdown.component.html',
})
export class FilterDropdownComponent<T extends string> {
  isDropdownOpen = signal(false);

  filters = input.required<T[]>();
  queryParamName = input<string>('filter');

  // filters: FilterType[] = ['cutomer', 'order', 'date', 'total'];

  chosenFilter = signal<T | null>(null);

  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const urlParams = new URLSearchParams(window.location.search);

      effect(() => {
        const paramKey = this.queryParamName();

        // Initial load from URL
        const initialValue = urlParams.get(paramKey) as T | null;
        if (initialValue && this.filters().includes(initialValue) && !this.chosenFilter()) {
          this.chosenFilter.set(initialValue);
        }
      });

      effect(() => {
        const paramKey = this.queryParamName();
        const filterValue = this.chosenFilter();
        const urlParams = new URLSearchParams(window.location.search);

        if (filterValue != null) {
          urlParams.set(paramKey, filterValue);
        } else {
          urlParams.delete(paramKey);
        }

        window.history.replaceState({}, '', `${window.location.pathname}?${urlParams.toString()}`);
      });
    }
  }

  clickHandle = (filter: T) => {
    // console.log({ filter });
    this.isDropdownOpen.set(false);

    this.chosenFilter.set(filter);

    // window.history.replaceState({}, '', `${window.location.pathname}?${urlParams.toString()}`);
  };
}
