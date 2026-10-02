import { Component, input } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [NgComponentOutlet, RouterLink],
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
