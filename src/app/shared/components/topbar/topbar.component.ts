import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [FormsModule, InputTextModule, MenuModule],
  templateUrl: './topbar.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent implements OnInit {
  @Output() hideSidebar = new EventEmitter<boolean>();
  searchValue: string = '';
  items: MenuItem[] | undefined;

  toggleSidebar() {
    this.hideSidebar.emit(true);
  }

  ngOnInit(): void {
    this.items = [
      { label: 'Add Account', icon: 'pi pi-credit-card', routerLink: ['/account/add'] },
      {
        label: 'Add Transaction',
        icon: 'pi pi-arrow-right-arrow-left',
        routerLink: ['/transaction/add'],
      },
      {
        label: 'Add Budget',
        icon: 'pi pi-wallet',
        routerLink: ['/budget/add'],
      },
    ];
  }
}
