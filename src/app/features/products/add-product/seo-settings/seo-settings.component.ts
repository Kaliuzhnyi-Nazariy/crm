import { Component, model } from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  imports: [InputComponent],
  selector: 'app-seo-settings',
  styles: ``,
  templateUrl: './seo-settings.component.html',
})
export class SeoSettingsComponent {
  title = model<string>('');
  description = model<string>('');
}
