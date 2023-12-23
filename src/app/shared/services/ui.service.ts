import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private sidebarVisible = signal(false);
  isSidebarVisible = computed(() => this.sidebarVisible);

  toggleSidebarVisibility() {
    this.sidebarVisible.set(!this.sidebarVisible());
  }
}
