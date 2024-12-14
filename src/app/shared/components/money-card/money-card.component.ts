import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AccountData } from '../../models/user.model';

@Component({
  selector: 'app-money-card',
  imports: [],
  templateUrl: './money-card.component.html',
  styleUrl: './money-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoneyCardComponent {
  readonly account = input.required<AccountData>();
}
