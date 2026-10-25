import { Component, input } from '@angular/core';
import { Button } from '../../../../shared/components/button/button.type';
import { EmptyListComponent } from '../../../../shared/components/empty-list/empty-list.component';

@Component({
  imports: [EmptyListComponent],
  selector: 'app-empty-orders-list',
  styles: ``,
  templateUrl: './empty-orders-list.component.html',
})
export class EmptyOrdersListComponent {
  addOrder = input<Button>();

  read = {
    name: 'Read more',
    fn: () => alert('read'),
  };
}
