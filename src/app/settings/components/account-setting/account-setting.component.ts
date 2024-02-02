import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-account-setting',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './account-setting.component.html',
  styleUrl: './account-setting.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountSettingComponent { 

}
