import { Component } from '@angular/core';
import { Comment } from '@primeicons/angular/comment';
import { Bell } from '@primeicons/angular/bell';

@Component({
  imports: [Comment, Bell],
  selector: 'app-header-utility-nav',
  styles: ``,
  templateUrl: './header-utility-nav.component.html',
})
export class HeaderUtilityNavComponent {}
