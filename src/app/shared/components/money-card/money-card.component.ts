import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AccountData } from '../../models/user.model';

@Component({
  selector: 'app-money-card',
  standalone: true,
  imports: [],
  templateUrl: './money-card.component.html',
  styleUrl: './money-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoneyCardComponent {
  @Input({ required: true }) account!: AccountData;
}
