import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
];
