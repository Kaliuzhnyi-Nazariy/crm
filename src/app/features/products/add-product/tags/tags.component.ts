import { Component, model, signal } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { Times } from '@primeicons/angular/times';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [InputComponent, Times, FormsModule],
  selector: 'app-tags',
  styles: ``,
  templateUrl: './tags.component.html',
})
export class TagsComponent {
  tags = model<string[]>([]);
  currentInputValue = signal<string>('');

  handleSubmit() {
    const newTag = this.currentInputValue().trim();

    if (newTag && !this.tags().includes(newTag)) {
      this.tags.update((currentTags) => [...currentTags, newTag]);
      this.currentInputValue.set('');
    }
  }

  removeTag(tagToRemove: string) {
    this.tags.update((currentTags) => currentTags.filter((tag) => tag !== tagToRemove));
  }
}
