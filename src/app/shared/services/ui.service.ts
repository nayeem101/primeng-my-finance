import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private sidebarVisible = signal(false);
  isSidebarVisible = this.sidebarVisible.asReadonly();

  toggleSidebarVisibility() {
    this.sidebarVisible.set(!this.sidebarVisible());
  }
}
