import { UserService } from '@/core/business/services/user.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-get-my-account',
  imports: [],
  templateUrl: './get-my-account.html',
  styleUrl: './get-my-account.css',
})
export class GetMyAccountComponent {
  private readonly userService = inject(UserService);

  onGetCurrentUser(): void {
    this.userService
      .getCurrentUser()
      .subscribe({
        next: (response) => {
          console.log(response.time);
          console.log(response.message);
          console.log(response.data);

          if (!response.data?.userAccountData) {
            this.handleGetCurrentUserUserError(
              new Error('Get Current user response did not contain user account data.')
            );

            return;
          }
        },

        error: (error) => this.handleGetCurrentUserUserError(error),
      });
  }

  private handleGetCurrentUserUserError(error: unknown): void {
    console.error('Get current user account failed', error);
  }

}
