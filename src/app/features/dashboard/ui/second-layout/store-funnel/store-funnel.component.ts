import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../../../../shared/components/info-block/info-block.component';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { Statistics } from './statistics/statistics';

type Range = '7d' | '10d' | '28d';
@Component({
  imports: [InfoBlockComponent, FormsModule, Select, Statistics],
  selector: 'app-store-funnel',
  styles: `
    :host ::ng-deep {
      .custom-funnel-panel {
        background-color: #ffffff;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        border: 1px solid #e5e7eb;
        padding: 0.25rem;

        ul {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }

        li {
          padding: 0.5rem;
          border-radius: 0.375rem;

          &:hover,
          &.p-focus {
            background-color: #f3f4f6; /* Style on hover/focus */
          }
        }
      }
    }

    .p-select-list {
      background-color: #f3f4f6 !important;
      padding: 0.5rem !important;
    }
  `,
  templateUrl: './store-funnel.component.html',
})
export class StoreFunnelComponent {
  selectedDaysRange: Range = '7d';

  daysRange = [
    { label: 'Last 7 days', value: '7d' as const },
    { label: 'Last 10 days', value: '10d' as const },
    { label: 'Last 28 days', value: '28d' as const },
  ];

  selectRange = (range: Range) => {
    this.selectedDaysRange = range;
  };

  conversionRate = 28;
  riseRate = 4;
}
