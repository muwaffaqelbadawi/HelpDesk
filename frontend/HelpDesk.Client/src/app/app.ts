import { Component, inject } from '@angular/core';
import { AuthStateService } from './core/auth/services/auth-state.service';
import { AppHeaderComponent } from './components/header/header';
import { AppTopbarComponent } from './components/topbar/topar';
import { AppSidebarComponent } from './components/sidebar/sidebar';
@Component({
  selector: 'app-root',
  imports: [AppHeaderComponent, AppTopbarComponent, AppSidebarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  readonly authState = inject(AuthStateService);
}
