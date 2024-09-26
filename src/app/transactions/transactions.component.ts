import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  inject,
} from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { user1 } from '../shared/models/user.data';
import {
  AccountTransaction,
  TransactionType,
} from '../shared/models/user.model';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';
import { TransactionStore } from '../shared/store/transactions.store';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [TableModule, ButtonModule, ConfirmDialogModule, ToastModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
  providers: [
    ConfirmationService,
    MessageService,
    DialogService,
    TransactionStore,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsComponent implements OnDestroy {
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);
  private dialogService = inject(DialogService);
  private transactionsStore = inject(TransactionStore);

  dialogRef: DynamicDialogRef | undefined;
  // transactions: AccountTransaction[] = user1.manager.transactions;
  transactions = this.transactionsStore.entities;

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

  onAddNewClick() {
    this.openDialogForm('create');
  }

  onEditClick(transaction: AccountTransaction): void {
    this.openDialogForm('edit', transaction);
  }

  onDeleteClick(event: Event, transaction: AccountTransaction): void {
    console.log(transaction);
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Record deleted',
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
        });
      },
    });
  }

  openDialogForm(action: 'create' | 'edit', data?: any) {
    console.log({ action, data });
    const header = action === 'create' ? 'Add Transaction' : 'Edit Transaction';

    this.dialogRef = this.dialogService.open(TransactionFormComponent, {
      header,
      width: '40vw',
      contentStyle: { overflow: 'auto' },
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
      data,
    });

    this.dialogRef.onClose.subscribe((data) => {
      console.log(data);
      if (!data) {
        return;
      }
      //add transaction
      if (action === 'create') {
        const formData = data.formData;
        const newTransaction: AccountTransaction = {
          ...formData,
          id: this.transactionsStore.ids().length + 1,
          accountName: formData.accountName.name,
          type: formData.type.name,
        };
        console.log(newTransaction);
        this.transactionsStore.addTransaction(newTransaction);
      }

      //show message alert
      const summary_and_detail =
        action === 'edit'
          ? {
              summary: 'Transaction Updated',
              detail: `Transaction Type: ${data.formData?.type?.name}`,
            }
          : {
              summary: 'New Transaction Added',
              detail: `Transaction Type: ${data.formData?.type?.name}`,
            };
      this.messageService.add({
        severity: 'info',
        ...summary_and_detail,
        life: 2000,
      });
    });
  }

  ngOnDestroy() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
