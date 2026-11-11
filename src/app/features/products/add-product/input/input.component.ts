import { Component, computed, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-input',
  styleUrl: './input.component.css',
  templateUrl: './input.component.html',
})
export class InputComponent {
  label = input<string>();
  placeholder = input<string>('Enter value');
  textarea = input<boolean>(false);

  disabled = input<boolean>(false);

  value = model<string | number>('');
  type = input<string>('text');

  placeholderValue = computed(() => {
    return this.placeholder() ?? this.label();
  });

  styles = computed(() => (this.disabled() ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'));
}
