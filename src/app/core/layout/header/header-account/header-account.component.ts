import { Component } from '@angular/core';
import { AngleDown } from '@primeicons/angular/angle-down';

@Component({
  imports: [AngleDown],
  selector: 'app-header-account',
  styles: ``,
  templateUrl: './header-account.component.html',
})
export class HeaderAccountComponent {
  isMenuOpen = false;

  toggleMenu = (e: Event) => {
    const button = e.currentTarget as HTMLButtonElement;
    button.blur();

    this.isMenuOpen = !this.isMenuOpen;
  };
}
