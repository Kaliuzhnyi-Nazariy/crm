import { Component } from '@angular/core';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { HeaderUtilityNavComponent } from './header-utility-nav/header-utility-nav.component';
import { HeaderAccountComponent } from './header-account/header-account.component';
import { RouterLink } from '@angular/router';

@Component({
  imports: [HeaderSearchComponent, HeaderUtilityNavComponent, HeaderAccountComponent, RouterLink],
  selector: 'app-header',
  styleUrl: './header.component.css',
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
