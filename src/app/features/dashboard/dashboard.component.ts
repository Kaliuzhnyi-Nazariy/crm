import { Component } from '@angular/core';
import { ContentComponent } from '../../core/layout/content/content.component';
import { Cog } from '@primeicons/angular/cog';
import { FirstLayoutComponent } from './ui/first-layout/first-layout.component';

@Component({
  imports: [ContentComponent, FirstLayoutComponent],
  selector: 'app-dashboard',
  styles: ``,
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  button = {
    name: 'Manag',
    icon: Cog,
    fn: () => alert('It is clicked and work!'),
  };
}
