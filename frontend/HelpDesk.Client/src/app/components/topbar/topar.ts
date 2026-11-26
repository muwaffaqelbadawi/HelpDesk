import { Component, inject } from '@angular/core';
import { AppLanguageSelectorComponent } from '@/core/localization/language-selector';
import { AuthStateService } from '@/core/auth/services/auth-state.service';

@Component({
  selector: 'app-topbar',
  imports: [AppLanguageSelectorComponent],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class AppTopbarComponent {
  readonly authState = inject(AuthStateService);
}
