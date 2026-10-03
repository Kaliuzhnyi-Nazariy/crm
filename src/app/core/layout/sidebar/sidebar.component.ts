import { Component, computed, inject } from '@angular/core';
import { Home } from '@primeicons/angular/home';
import { List } from '@primeicons/angular/list';
import { Tag } from '@primeicons/angular/tag';
import { Folder } from '@primeicons/angular/folder';
import { Users } from '@primeicons/angular/users';
import { ChartBar } from '@primeicons/angular/chart-bar';
import { Star } from '@primeicons/angular/star';
import { Comment } from '@primeicons/angular/comment';
import { QuestionCircle } from '@primeicons/angular/question-circle';
import { Bookmark } from '@primeicons/angular/bookmark';
import { User } from '@primeicons/angular/user';

// import { Comment } from '@primeicons/angular/comment';
// import { Comment } from '@primeicons/angular/comment';

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
        { icon: Tag, name: 'Products', link: '/products' },
        { icon: Folder, name: 'Categories', link: '/categories' },
        { icon: Users, name: 'Customers', link: '/customers' },
        { icon: ChartBar, name: 'Reports', link: '/reports' },
        { icon: Star, name: 'Coupons', link: '/coupons' },
        { icon: Comment, name: 'Inbox', link: '/coversations' },
      ],
    },
    {
      title: 'Other Information',
      items: [
        { icon: QuestionCircle, name: 'Knowledge Base', link: '/knowledge' },
        { icon: Bookmark, name: 'Product Updates', link: '/products/update' },
      ],
    },
    {
      title: 'Settings',
      items: [
        { icon: User, name: 'Personal Settings', link: '/settings' },
        // { icon: List, name: 'Global Settings', link: '/settings' },
      ],
    },
  ];
}
