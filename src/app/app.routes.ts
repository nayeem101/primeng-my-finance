import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'accounts',
    loadComponent: () =>
      import('../app/accounts/accounts.component').then(
        (m) => m.AccountsComponent
      ),
  },
  {
    path: 'transactions',
    loadComponent: () =>
      import('../app/transactions/transactions.component').then(
        (m) => m.TransactionsComponent
      ),
  },
  {
    path: 'budgets',
    loadComponent: () =>
      import('../app/budgets/budgets.component').then(
        (m) => m.BudgetsComponent
      ),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('../app/settings/settings.component').then(
        (m) => m.SettingsComponent
      ),
  },
];
