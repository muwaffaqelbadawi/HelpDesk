import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly translate = inject(TranslateService);

  setLanguage(language: 'en' | 'ar'): void {
    this.translate.use(language);
  }

  get currentLanguage(): string | null {
    return this.translate.currentLang();
  }
}
