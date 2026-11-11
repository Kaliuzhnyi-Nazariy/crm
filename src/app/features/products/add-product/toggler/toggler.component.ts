import { Component, computed, input, model, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-toggler',
  styles: ``,
  templateUrl: './toggler.component.html',
  standalone: true,
})
export class TogglerComponent {
  label = input.required<string>();
  status = model<boolean>(false);

  toggle = () => this.status.set(!this.status());

  position = (toggle: boolean) => computed(() => (toggle ? 'translate-x-full' : 'translate-x-0'));

  bg = (value: boolean) => computed(() => (value ? 'bg-(--primary-100)' : 'bg-(--primary-40)'));
}
