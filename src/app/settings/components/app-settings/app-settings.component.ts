import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-app-settings',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './app-settings.component.html',
  styleUrl: './app-settings.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppSettingsComponent { }
