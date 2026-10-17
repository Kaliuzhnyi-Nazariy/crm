import { Component, OnInit, signal } from '@angular/core';
import { ContentComponent } from '../../core/layout/content/content.component';
import { Cog } from '@primeicons/angular/cog';
import { FirstLayoutComponent } from './ui/first-layout/first-layout.component';
import { SecondLayout } from './ui/second-layout/second-layout';
import { LayoutsSettingsModal } from './ui/layouts-settings-modal/layouts-settings-modal';
import { LocalStorage } from '../../core/services/local-storage';
import { ThirdLayout } from './ui/third-layout/third-layout';

@Component({
  imports: [
    ContentComponent,
    FirstLayoutComponent,
    SecondLayout,
    LayoutsSettingsModal,
    ThirdLayout,
  ],
  selector: 'app-dashboard',
  styles: ``,
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  layout = signal<string>('first');
  visible = false;

  constructor(private localStorageService: LocalStorage) {}

  ngOnInit(): void {
    // Correctly matches the parsed output from your LocalStorage service
    const value = this.localStorageService.getItem<string>('layoutId');
    if (value) {
      this.layout.set(value);
    }
  }

  // Receives the update from your modal's output emitter reactively
  onLayoutChanged(newLayout: string) {
    this.layout.set(newLayout);
  }

  button = {
    name: 'Manag',
    icon: Cog,
    fn: () => {
      this.visible = true;
    },
  };
}
