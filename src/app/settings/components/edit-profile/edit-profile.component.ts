import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

@Component({
    selector: 'app-edit-profile',
    imports: [ReactiveFormsModule, InputTextModule, TextareaModule, ButtonModule],
    templateUrl: './edit-profile.component.html',
    styleUrl: './edit-profile.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProfileComponent {
  private formBuilder = inject(FormBuilder);
  profileForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    mobileNumber: [
      '',
      [
        Validators.required,
        Validators.pattern(/^\+?(88)?0?1[3456789][0-9]{8}\b/g),
      ],
    ],
    occupation: ['', [Validators.required]],
    bio: [''],
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
