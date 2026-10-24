import { Component, input, signal, computed, effect, model } from '@angular/core';
import { ArrowLeft } from '@primeicons/angular/arrow-left';
import { ArrowRight } from '@primeicons/angular/arrow-right';

@Component({
  imports: [ArrowLeft, ArrowRight],
  selector: 'app-pagination',
  styles: ``,
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  allProductsLength = input.required<number>();
  productsPerPage = input<number>(1);
  currentPage = model<number>(1);

  pages = computed<(number | string)[]>(() => {
    const total = this.allProductsLength();
    const perPage = this.productsPerPage();
    const totalPages = total ? Math.ceil(total / perPage) : 1;
    const current = this.currentPage();

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pagesArray: (number | string)[] = [];

    pagesArray.push(1);

    const showLeftDots = current > 4;
    const showRightDots = current < totalPages - 3;

    if (!showLeftDots && showRightDots) {
      for (let i = 2; i <= 5; i++) {
        pagesArray.push(i);
      }
      pagesArray.push('...');
    } else if (showLeftDots && !showRightDots) {
      pagesArray.push('...');
      for (let i = totalPages - 4; i < totalPages; i++) {
        pagesArray.push(i);
      }
    } else {
      pagesArray.push('...');
      pagesArray.push(current - 1);
      pagesArray.push(current);
      pagesArray.push(current + 1);
      pagesArray.push('...');
    }

    pagesArray.push(totalPages);

    return pagesArray;
  });

  isButtonDisabled = (arrow: 'left' | 'right') => {
    if (arrow === 'left' && this.currentPage() === 1) {
      return true;
    } else if (arrow === 'right' && this.currentPage() === this.pages().length) {
      return true;
    } else {
      return false;
    }
  };

  setPage(page: number | string) {
    if (typeof page === 'number') {
      this.currentPage.set(page);
    }
  }

  leftClick = () => {
    if (this.currentPage() > 1) {
      this.currentPage.update((p) => p - 1);
    }
  };

  rightClick = () => {
    const totalPages = Math.ceil(this.allProductsLength() / this.productsPerPage());
    if (this.currentPage() < totalPages) {
      this.currentPage.update((p) => p + 1);
    }
  };

  showData = () => {
    console.log(this.currentPage(), this.productsPerPage(), this.allProductsLength());
  };

  constructor() {
    effect(() => {
      this.showData();
    });
  }
}
