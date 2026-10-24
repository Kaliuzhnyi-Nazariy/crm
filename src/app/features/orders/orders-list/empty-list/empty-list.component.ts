import { Component, input } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { Button } from '../../../../shared/components/button/button.type';

@Component({
  imports: [ButtonComponent],
  selector: 'app-empty-list',
  styles: ``,
  templateUrl: './empty-list.component.html',
})
export class EmptyListComponent {
  addOrder = input<Button>();

  read = {
    name: 'Read more',
    fn: () => alert('read'),
  };
}
