import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccountData } from '../../../shared/models/user.model';
import { AccHorizontalBarChartComponent } from '../acc-horizontal-bar-chart/acc-horizontal-bar-chart.component';
import { AccPieChartComponent } from '../acc-pie-chart/acc-pie-chart.component';
import { MoneyCardComponent } from '../../../shared/components/money-card/money-card.component';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-accounts-tab',
  standalone: true,
  imports: [
    AccPieChartComponent,
    AccHorizontalBarChartComponent,
    MoneyCardComponent,
    DividerModule
  ],
  templateUrl: './accounts-tab.component.html',
  styleUrl: './accounts-tab.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountsTabComponent {
  accountData: AccountData[] = [
    {
      id: 1,
      name: 'TBL Savings Account',
      balance: 12_500,
    },
    {
      id: 2,
      name: 'TBL DPS Account',
      balance: 35_000,
    },
    {
      id: 3,
      name: 'Bkash Account',
      balance: 10_000,
    },
  ];

  totalBalance = this.accountData
    .reduce((acc, data) => acc + data.balance, 0)
    .toFixed(2);
}
