import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../core/layout/header/header.component';
import { SidebarComponent } from '../core/layout/sidebar/sidebar.component';

@Component({
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('crm');
}
