import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { BudgetType } from '../../../shared/models/user.model';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-budget-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    KeyFilterModule,
    CalendarModule,
    DropdownModule,
  ],
  templateUrl: './budget-form.component.html',
  styleUrl: './budget-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BudgetFormComponent implements OnInit {
  private dialogRef = inject(DynamicDialogRef);
  private dialogConfig = inject(DynamicDialogConfig);
  private fb = inject(FormBuilder);

  budgetForm = this.fb.group({
    name: ['', Validators.required],
    budgetType: [{ type: '' }, Validators.required],
    createdAt: [new Date(), Validators.required],
    amount: [0, Validators.required],
  });

  budgetTypes = Object.values(BudgetType).map((type) => ({ type }));

  ngOnInit() {
    console.log(this.dialogConfig.data);
    const dialogData = this.dialogConfig.data;
    if (dialogData) {
      this.budgetForm.patchValue({
        name: dialogData?.name,
        budgetType: { type: dialogData?.budgetType ?? '' },
        createdAt: new Date(dialogData?.createdAt),
        amount: dialogData?.amount,
      });
    }
  }

  onSubmit() {
    console.log(this.budgetForm.value);
    this.dialogRef.close({
      buttonType: 'submit',
      formData: this.budgetForm.value,
    });
    this.budgetForm.reset();
  }
}
