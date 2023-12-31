import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { AccountsTabComponent } from './components/accounts-tab/accounts-tab.component';
import { TransactionsHistroyComponent } from './components/transactions-histroy/transactions-histroy.component';

const Components = [AccountsTabComponent, TransactionsHistroyComponent];

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [Components, TabViewModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountsComponent {}
