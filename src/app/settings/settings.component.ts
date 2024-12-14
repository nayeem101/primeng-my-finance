import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { AccountSettingComponent } from './components/account-setting/account-setting.component';
import { AppSettingsComponent } from './components/app-settings/app-settings.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

const Components = [
  AccountSettingComponent,
  AppSettingsComponent,
  EditProfileComponent,
];

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [Components, TabsModule],
  templateUrl: './settings.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {}
