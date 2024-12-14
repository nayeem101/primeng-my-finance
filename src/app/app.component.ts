import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { TopbarComponent } from './shared/components/topbar/topbar.component';

const components = [SidebarComponent, TopbarComponent];

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    RippleModule,
    SidebarModule,
    DropdownModule,
    components,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'primeng-my-finance';
  sidebarVisible = false;

  onShowSidebar(showSidebar: boolean) {
    this.sidebarVisible = showSidebar;
  }
}
