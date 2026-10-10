import { Component, input } from '@angular/core';
import { Button } from '../../../shared/components/button/button.type';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  imports: [ButtonComponent],
  selector: 'app-content',
  styles: ``,
  // host: {
  //   class: 'flex flex-col flex-1 min-h-0 w-full',
  // },
  host: {
    class: 'flex flex-col h-full min-h-0 w-full mb-10 pb-10',
  },
  templateUrl: './content.component.html',
})
export class ContentComponent {
  title = input<string>();

  mainFunction = input<Button>();
  secondaryFunction = input<Button>();
}
