import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccountsTabComponent } from './components/accounts-tab/accounts-tab.component';
import { TransactionsHistroyComponent } from './components/transactions-histroy/transactions-histroy.component';
import { TabsModule } from 'primeng/tabs';
const Components = [AccountsTabComponent, TransactionsHistroyComponent];

@Component({
    selector: 'app-accounts',
    imports: [Components, TabsModule],
    templateUrl: './accounts.component.html',
    styleUrl: './accounts.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountsComponent {}
