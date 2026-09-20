import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './core/localization/language.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  readonly languageService = inject(LanguageService);

  get currentLanguage(): string | null {
    return this.languageService.currentLanguage;
  }

  toggleLanguage(): void {
    this.languageService.setLanguage(this.currentLanguage === 'ar' ? 'en' : 'ar');
  }

  protected readonly title = signal('HelpDesk.Frontend');
}
