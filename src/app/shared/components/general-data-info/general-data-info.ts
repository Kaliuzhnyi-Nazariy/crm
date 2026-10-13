import { Component, input } from '@angular/core';
import { AngleDown } from '@primeicons/angular/angle-down';
import { AngleUp } from '@primeicons/angular/angle-up';

@Component({
  imports: [AngleDown, AngleUp],
  selector: 'app-general-data-info',
  styles: ``,
  templateUrl: './general-data-info.html',
})
export class GeneralDataInfo {
  protected readonly Math = Math;

  title = input<string>();
  amount = input<number>(0);
  isValute = input<boolean>(false);
  percentage = input<number>(0);

  type = input<'first' | 'second'>('first');
}
