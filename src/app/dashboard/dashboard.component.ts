import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BudgetsComponent } from './components/budgets/budgets.component';
import { MoneyStatusChartComponent } from './components/money-status-chart/money-status-chart.component';
import { RecentTransactionsComponent } from './components/recent-transactions/recent-transactions.component';
import { WalletBalanceComponent } from './components/wallet-balance/wallet-balance.component';

const Components = [
  WalletBalanceComponent,
  MoneyStatusChartComponent,
  BudgetsComponent,
  RecentTransactionsComponent,
];

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Components],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
