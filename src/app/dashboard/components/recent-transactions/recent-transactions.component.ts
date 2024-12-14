
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-recent-transactions',
    imports: [],
    templateUrl: './recent-transactions.component.html',
    styles: `
    .list li:not(:last-child) {
      border-bottom: 1px solid var(--gray-300);
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentTransactionsComponent {}
