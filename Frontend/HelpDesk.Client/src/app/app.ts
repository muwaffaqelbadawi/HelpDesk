import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './core/localization/language.service';
import { BackendUnavailableComponent } from './core/backend-unavailable/backend-unavailable';
import { AuthStateService } from './core/auth/services/auth-state.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BackendUnavailableComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  readonly languageService = inject(LanguageService);
  readonly authState = inject(AuthStateService);

  get currentLanguage(): string | null {
    return this.languageService.currentLanguage;
  }

  toggleLanguage(): void {
    this.languageService.setLanguage(this.currentLanguage === 'ar' ? 'en' : 'ar');
  }
}
