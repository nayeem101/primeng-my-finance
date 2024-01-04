import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { user1 } from '../../../shared/models/user.data';
import { TransactionType } from '../../../shared/models/user.model';

type Account = {
  id: number;
  name: string;
};

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    KeyFilterModule,
    CalendarModule,
    DropdownModule,
  ],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionFormComponent implements OnInit {
  private dialogRef = inject(DynamicDialogRef);
  private dialogConfig = inject(DynamicDialogConfig);
  private fb = inject(FormBuilder);

  accounts: Account[] = user1.manager.accounts.map((account) => ({
    id: account.id,
    name: account.name,
  }));
  transactionTypes = Object.values(TransactionType).map((type) => ({
    name: type,
  }));

  transactionForm = this.fb.group({
    name: ['', Validators.required],
    date: [new Date(), Validators.required],
    accountName: [{ id: 0, name: '' }, Validators.required],
    type: [{ name: '' }, Validators.required],
    amount: [0, Validators.required],
  });

  ngOnInit() {
    console.log(this.dialogConfig.data);
    if (this.dialogConfig.data) {
      this.transactionForm.patchValue({
        name: this.dialogConfig.data.name,
        date: new Date(this.dialogConfig.data.date),
        accountName: {
          id: this.dialogConfig.data.id,
          name: this.dialogConfig.data.accountName,
        },
        type: { name: this.dialogConfig.data.type },
        amount: this.dialogConfig.data.amount,
      });
    }
  }

  onSubmit() {
    console.log(this.transactionForm.value);
    this.dialogRef.close({
      buttonType: 'submit',
      formData: this.transactionForm.value,
    });
    this.transactionForm.reset();
  }

  closeDialog(data: any) {
    this.dialogRef.close(data);
  }
}
