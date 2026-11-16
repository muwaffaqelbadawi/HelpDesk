import { UserService } from '@/core/business/services/user.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-by-id-user',
  imports: [],
  templateUrl: './get-by-id-user.html',
  styleUrl: './get-by-id-user.css',
})
export class GetByIdUserComponent {
  private readonly userService = inject(UserService);
  private readonly route = inject(ActivatedRoute);

  onGetById(): void {
    const userId = this.route.snapshot.queryParamMap.get('userId');

    if (!userId) {
      this.handleGetByIdUserError(new Error('User ID is required.'));
      return;
    }

    this.userService
      .getByIdUser({
        userId: userId,
      })
      .subscribe({
        next: (response) => {
          console.log(response.time);
          console.log(response.message);
          console.log(response.data);

          if (!response.data?.userAccountData) {
            this.handleGetByIdUserError(
              new Error('Get by ID user response did not contain user data.')
            );

            return;
          }
        },

        error: (error) => this.handleGetByIdUserError(error),
      });
  }

  private handleGetByIdUserError(error: unknown): void {
    console.error('Get by ID user account failed', error);
  }
}
