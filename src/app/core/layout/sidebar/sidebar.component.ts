import { Component } from '@angular/core';
import { Home } from '@primeicons/angular/home';
import { List } from '@primeicons/angular/list';
import { ListItemComponent } from './list-item/list-item.component';

interface NavigationItem {
  icon: any;
  name: string;
  link: string;
  badge?: number;
}

interface NavigationGroup {
  title?: string;
  items: NavigationItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ListItemComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  menuGroups: NavigationGroup[] = [
    {
      items: [
        { icon: Home, name: 'Dashboard', link: '/dashboard' },
        { icon: List, name: 'Orders', link: '/orders', badge: 16 },
        { icon: List, name: 'Products', link: '/products' },
        { icon: List, name: 'Categories', link: '/categories' },
        { icon: List, name: 'Customers', link: '/customers' },
        { icon: List, name: 'Reports', link: '/reports' },
        { icon: List, name: 'Coupons', link: '/coupons' },
        { icon: List, name: 'Inbox', link: '/inbox' },
      ],
    },
    {
      title: 'Other Information',
      items: [
        { icon: List, name: 'Knowledge Base', link: '/knowledge-base' },
        { icon: List, name: 'Product Updates', link: '/product-updates' },
      ],
    },
    {
      title: 'Settings',
      items: [
        { icon: List, name: 'Personal Settings', link: '/personal-settings' },
        { icon: List, name: 'Global Settings', link: '/global-settings' },
      ],
    },
  ];
}
