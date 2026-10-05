import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-info-block',
  styles: ``,
  templateUrl: './info-block.component.html',
})
export class InfoBlockComponent {
  isHidden = input<boolean>(false);
  title = input<string>();
}
