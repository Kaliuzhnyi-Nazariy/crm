import { NgComponentOutlet } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { AngleDown } from '@primeicons/angular/angle-down';
import { AngleUp } from '@primeicons/angular/angle-up';
import { Dollar } from '@primeicons/angular/dollar';
import { ShoppingCart } from '@primeicons/angular/shopping-cart';
import { User } from '@primeicons/angular/user';
import { Users } from '@primeicons/angular/users';

const ICON_MAP = {
  Dollar,
  ShoppingCart,
  User,
  Users,
};

@Component({
  imports: [NgComponentOutlet, AngleDown, AngleUp],
  selector: 'app-general-data',
  styles: ``,
  styleUrl: './general-data.component.css',
  templateUrl: './general-data.component.html',
})
export class GeneralDataComponent {
  protected readonly Math = Math;

  private rawData = signal([
    {
      id: 1,
      title: 'Total Revenue',
      amount: 10540,
      percentage: 22.45,
      icon: ICON_MAP.Dollar,
      isValute: true,
    },
    {
      id: 2,
      title: 'Orders',
      amount: 1056,
      percentage: 15.34,
      icon: ICON_MAP.ShoppingCart,
      isValute: false,
    },
    {
      id: 3,
      title: 'Active Sessions',
      amount: 48,
      percentage: -18.25,
      icon: ICON_MAP.User,
      isValute: false,
    },
    {
      id: 4,
      title: 'Total Sessions',
      amount: 5420,
      percentage: -10.24,
      icon: ICON_MAP.Users,
      isValute: false,
    },
  ]);

  generalData = computed(() => {
    const list = this.rawData();
    const lastIndex = list.length - 1;

    return list.map((item, index) => {
      let padding = 'px-10.5';

      if (index === 0) {
        padding = 'pl-7 pr-10.5';
      } else if (index === lastIndex) {
        padding = 'pr-7 pl-10.5';
      }

      return {
        ...item,
        customClass: `py-7 ${padding}`,
      };
    });
  });
}
