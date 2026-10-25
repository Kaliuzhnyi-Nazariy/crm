import { Component, input } from '@angular/core';
import { Button } from '../button/button.type';
import { ButtonComponent } from '../button/button.component';

@Component({
  imports: [ButtonComponent],
  selector: 'app-empty-list',
  styles: ``,
  templateUrl: './empty-list.component.html',
})
export class EmptyListComponent {
  title = input<string>();
  text = input<string>();
  iconURL = input<string>();

  addButton = input.required<Button>();

  read = {
    name: 'Read more',
    fn: () => alert('read'),
  };
}
