import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { user1 } from '../../../shared/models/user.data';

@Component({
  selector: 'app-budgets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './budgets.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BudgetsComponent {
  budgetsData = user1.manager.budgets;
}
