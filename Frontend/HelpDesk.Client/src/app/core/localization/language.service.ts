import { DOCUMENT, Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly translate = inject(TranslateService);

  setLanguage(language: 'en' | 'ar'): void {
    this.translate.use(language);

    this.document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }

  get currentLanguage(): string | null {
    return this.translate.currentLang();
  }
}
