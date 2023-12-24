import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Account, TransactionType } from '../../../shared/models/user.model';

type AccountData = Omit<Account, 'transactions'>;

@Component({
  selector: 'app-wallet-balance',
  standalone: true,
  imports: [CardModule],
  templateUrl: './wallet-balance.component.html',
  styleUrl: './wallet-balance.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletBalanceComponent {
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

  totalBalance = this.accountData.reduce((acc, data) => acc + data.balance, 0);
}
