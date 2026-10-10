import { Component, computed, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-info-block',
  styles: ``,
  templateUrl: './info-block.component.html',
})
export class InfoBlockComponent {
  isHidden = input<boolean>(false);
  title = input<string>();

  isCuttedBottom = input<boolean>(false);

  styles = computed(() => `bg-white rounded-md p-7 ${this.isCuttedBottom() && 'pb-5'}`);
}
