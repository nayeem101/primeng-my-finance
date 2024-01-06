import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Budget, BudgetType } from '../shared/models/user.model';
import { user1 } from '../shared/models/user.data';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BudgetFormComponent } from './components/budget-form/budget-form.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

interface BudgetIconMap {
  [key: string]: string;
}

@Component({
  selector: 'app-budgets',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  templateUrl: './budgets.component.html',
  styleUrl: './budgets.component.css',
  providers: [ConfirmationService, MessageService, DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BudgetsComponent {
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);
  private dialogService = inject(DialogService);

  ref: DynamicDialogRef | undefined;
  budgets: Budget[] = user1.manager.budgets;

  budgetIcons: BudgetIconMap = {
    [BudgetType.GROCERIES]: 'pi pi-shopping-cart',
    [BudgetType.ENTERTAINMENT]: 'pi pi-video',
    [BudgetType.UTILITIES]: 'pi pi-bolt',
    [BudgetType.TRANSPORTATION]: 'pi pi-car',
    [BudgetType.TRAVEL_AND_TOUR]: 'pi pi-globe',
  };

  onAddNewClick() {
    this.openDialogForm('create');
  }

  onEditClick(budget: Budget): void {
    this.openDialogForm('edit', budget);
  }

  openDialogForm(action: 'create' | 'edit', data?: any) {
    console.log({ action, data });

    const header = action === 'create' ? 'Add Budget' : 'Edit Budget';
    this.ref = this.dialogService.open(BudgetFormComponent, {
      header,
      width: '40vw',
      contentStyle: { overflow: 'auto' },
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
      data,
    });

    this.ref.onClose.subscribe((data) => {
      console.log(data);
      if (data) {
        const summary_and_detail =
          action === 'edit'
            ? {
                summary: 'Budget Updated',
                detail: `Amount: ${data.formData?.amount}`,
              }
            : {
                summary: 'New Budget Added',
                detail: `Amount: ${data.formData?.amount}`,
              };
        this.messageService.add({
          severity: 'info',
          ...summary_and_detail,
          life: 2000,
        });
      }
    });
  }

  onDeleteClick($event: MouseEvent, budget: Budget) {
    console.log(budget);
    this.confirmationService.confirm({
      target: $event.target as EventTarget,
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
          summary: 'Declined',
          detail: 'Not deleted',
        });
      },
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
