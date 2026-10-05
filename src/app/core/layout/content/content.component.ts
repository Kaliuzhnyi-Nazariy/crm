import { Component, input } from '@angular/core';
import { Button } from '../../../shared/components/button/button.type';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  imports: [ButtonComponent],
  selector: 'app-content',
  styles: `
    host: {
      class: 'flex flex-col flex-1 min-h-0 w-full';
    }
  `,
  templateUrl: './content.component.html',
})
export class ContentComponent {
  title = input<string>();

  mainFunction = input<Button>();
  secondaryFunction = input<Button>();
}
