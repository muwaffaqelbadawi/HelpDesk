import { Component, inject } from '@angular/core';
import { AuthStateService } from '../auth/services/auth-state.service';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-language-selector',
  imports: [],
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.css',
})
export class AppLanguageSelectorComponent {
  readonly languageService = inject(LanguageService);
  readonly authState = inject(AuthStateService);

  get currentLanguage(): string | null {
    return this.languageService.currentLanguage;
  }

  toggleLanguage(): void {
    this.languageService.setLanguage(this.currentLanguage === 'ar' ? 'en' : 'ar');
  }
}
