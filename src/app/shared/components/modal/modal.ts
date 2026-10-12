import { NgComponentOutlet } from '@angular/common';
import { Component, inject, input, model } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  imports: [DialogModule, NgComponentOutlet],
  selector: 'app-modal',
  styles: ``,
  standalone: true,
  templateUrl: './modal.html',
})
export class Modal {
  visible = model<boolean>(false);

  openModal = input<{ fn: () => void }>();
}
