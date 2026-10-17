import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../../../../shared/components/info-block/info-block.component';

@Component({
  imports: [InfoBlockComponent],
  selector: 'app-top-salesman',
  styles: ``,
  templateUrl: './top-salesman.component.html',
})
export class TopSalesmanComponent {
  salesmans = [
    { name: 'Leroy Wise', sold: 48, amount: 22969 },
    { name: 'Sean Hill', sold: 42, amount: 20540 },
    { name: 'Lottie Gray', sold: 34, amount: 19435 },
    { name: 'Sadie Ramsey', sold: 28, amount: 16490 },
    { name: 'Floyd Pearson', sold: 26, amount: 12355 },
  ];
}
