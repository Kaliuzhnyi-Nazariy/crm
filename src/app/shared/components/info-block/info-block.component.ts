import { Component, computed, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-info-block',
  styles: ``,
  templateUrl: './info-block.component.html',
  host: {
    class: 'block h-full w-full',
  },
})
export class InfoBlockComponent {
  isHidden = input<boolean>(false);
  title = input<string>();

  isCuttedBottom = input<boolean>(false);

  extraStylesForContent = input<string>('');

  styles = computed(
    () =>
      `bg-white rounded-md p-7 ${this.isCuttedBottom() && 'pb-5'} ${this.extraStylesForContent()}`,
  );
}
