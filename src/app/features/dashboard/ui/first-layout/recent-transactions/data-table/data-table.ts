import { Component, computed } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-data-table',
  styles: ``,
  templateUrl: './data-table.html',
})
export class DataTable {
  transactions = [
    {
      name: 'Jessica S.',
      date: '24.05.2026',
      amount: 124.97,
      status: 'Paid',
    },
    {
      name: 'Andrew S.',
      date: '23.05.2026',
      amount: 55.42,
      status: 'Pending',
    },
    {
      name: 'Kevin S.',
      date: '23.05.2026',
      amount: 89.9,
      status: 'Paid',
    },
    {
      name: 'Jack S.',
      date: '22.05.2026',
      amount: 144.94,
      status: 'Pending',
    },
    {
      name: 'Arthur S.',
      date: '22.05.2026',
      amount: 70.52,
      status: 'Paid',
    },
  ];

  statuses = {
    paid: 'bg-(--green-40) text-(--green-100)',
    pending: 'bg-(--general-40) text-(--general-80)',
    // failed: 'bg-red-100 text-red-800'
  };

  styles = computed(() => {
    return (status: string) => {
      const key = status.toLowerCase() as keyof typeof this.statuses;
      const statusClass = this.statuses[key] || '';

      return `px-2 py-0.5 rounded-sm ${statusClass}`;
    };
  });
}
