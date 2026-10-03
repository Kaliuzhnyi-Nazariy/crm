import { NgComponentOutlet } from '@angular/common';
import { Component, input } from '@angular/core';

type Function = {
  name?: string;
  icon?: any;
  fn?: () => void;
};

@Component({
  imports: [NgComponentOutlet],
  selector: 'app-content',
  styles: ``,
  templateUrl: './content.component.html',
})
export class ContentComponent {
  title = input<string>();

  mainFunction = input<Function>();
  secondaryFunction = input<Function>();
}
