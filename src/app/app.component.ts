import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { TopbarComponent } from './shared/components/topbar/topbar.component';
import { UiService } from './shared/services/ui.service';

const components = [SidebarComponent, TopbarComponent];

@Component({
  selector: 'app-root',
  standalone: true,
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
export class AppComponent implements OnInit {
  private primeConfig = inject(PrimeNGConfig);
  private uiService = inject(UiService);
  title = 'primeng-my-finance';
  sidebarVisible = false;

  ngOnInit() {
    this.primeConfig.ripple = true;
  }

  onShowSidebar(showSidebar: boolean) {
    this.sidebarVisible = showSidebar;
  }
  
}
