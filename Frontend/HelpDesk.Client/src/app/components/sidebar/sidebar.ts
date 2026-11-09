import { AuthStateService } from '@/core/auth/services/auth-state.service';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackendUnavailableComponent } from '../backend-unavailable/backend-unavailable';

@Component({
  selector: 'app-sidebar',
  imports: [RouterOutlet, BackendUnavailableComponent],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class AppSidebarComponent {
  readonly authState = inject(AuthStateService);
}
