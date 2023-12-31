import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MoneyCardComponent } from '../../../shared/components/money-card/money-card.component';
import {
  AccountData,
  Transaction,
  TransactionType,
} from '../../../shared/models/user.model';

@Component({
  selector: 'app-transactions-histroy',
  standalone: true,
  imports: [MoneyCardComponent],
  templateUrl: './transactions-histroy.component.html',
  styleUrl: './transactions-histroy.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsHistroyComponent {
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

  transactions: Transaction[] = [
    {
      id: 1,
      type: TransactionType.EXPENSE,
      name: 'Coffee',
      amount: 5.25,
      date: '10/04/2023',
    },
    {
      id: 1,
      type: TransactionType.INCOME,
      name: 'Coffee',
      amount: 5.25,
      date: '10/04/2023',
    },
    {
      id: 1,
      type: TransactionType.EXPENSE,
      name: 'Coffee',
      amount: 5.25,
      date: '10/04/2023',
    },
    {
      id: 1,
      type: TransactionType.EXPENSE,
      name: 'Coffee',
      amount: 5.25,
      date: '10/04/2023',
    },
    {
      id: 1,
      type: TransactionType.INCOME,
      name: 'Coffee',
      amount: 5.25,
      date: '10/04/2023',
    },
    {
      id: 1,
      type: TransactionType.INCOME,
      name: 'Coffee',
      amount: 5.25,
      date: '10/04/2023',
    },
  ];

  getTransactionSign(transactionType: TransactionType): string {
    switch (transactionType) {
      case TransactionType.INCOME:
      case TransactionType.DEPOSIT:
      case TransactionType.CREDIT:
      case TransactionType.REFUND:
        return '+';
      case TransactionType.EXPENSE:
      case TransactionType.TRANSFER:
      case TransactionType.DEBIT:
      case TransactionType.FEE:
      case TransactionType.OTHER:
        return '-';
      default:
        return ''; // Handle other cases if needed
    }
  }
}
