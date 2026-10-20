import { Component, input, model } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonComponent } from './button/button.component';

@Component({
  imports: [DialogModule, ButtonComponent],
  selector: 'app-modal',
  styles: ``,
  standalone: true,
  templateUrl: './modal.html',
})
export class Modal {
  visible = model<boolean>(false);
  // visible = model<boolean>(true);
  header = input<string>();

  openModal = input<{ fn: () => void }>();
}
