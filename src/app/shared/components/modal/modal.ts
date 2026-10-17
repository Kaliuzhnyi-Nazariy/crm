import { Component, input, model } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  imports: [DialogModule],
  selector: 'app-modal',
  styles: ``,
  standalone: true,
  templateUrl: './modal.html',
})
export class Modal {
  visible = model<boolean>(false);

  openModal = input<{ fn: () => void }>();
}
