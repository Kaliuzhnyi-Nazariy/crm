import { Component, input } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [NgComponentOutlet, RouterLink, RouterLinkActive],
  selector: 'app-list-item',
  styles: ``,
  templateUrl: './list-item.component.html',
})
export class ListItemComponent {
  icon = input<any>();
  name = input<string>();
  link = input<string>();
  badge = input<number>();
}
