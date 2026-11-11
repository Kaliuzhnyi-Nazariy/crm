import { Component, ElementRef, model, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { Button } from '../../../../shared/components/button/button.type';

@Component({
  imports: [ButtonComponent],
  selector: 'app-file-input',
  styleUrl: './file-input.component.css',
  templateUrl: './file-input.component.html',
})
export class FileInputComponent {
  @ViewChild('fileInput') fileInputElement!: ElementRef<HTMLInputElement>;

  images = model<File[]>([]);

  readonly ACCEPTED_TYPE = 'image/';

  addFileButton: Button = {
    name: 'Add File',
    fn: () => this.fileInputElement.nativeElement.click(),
  };

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      if (input.files.length > 9) {
        alert('Only 9 images could be passed');
      }
      const selectedFiles = Array.from(input.files).slice(0, 9);
      this.validateAndProcessFiles(selectedFiles);

      input.value = '';
    }
  }

  isDragging = false;

  onDragOver(event: DragEvent): void {
    this.isDragging = true;
  }

  onDragLeave(): void {
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    this.isDragging = false;

    const dataTransfer = event.dataTransfer;
    if (dataTransfer && dataTransfer.files.length > 0) {
      const droppedFiles = Array.from(dataTransfer.files);
      this.validateAndProcessFiles(droppedFiles);
    }
  }

  private validateAndProcessFiles(files: File[]): void {
    const hasInvalidFile = files.some((file) => !file.type.startsWith(this.ACCEPTED_TYPE));

    if (hasInvalidFile) {
      alert('Only pictures allowed');
      return;
    }

    this.handleFiles(files);
  }

  private handleFiles(files: File[]): void {
    // console.log('files:', files);
    const firstFile = files[0];
    this.images.set(files);
  }
}
