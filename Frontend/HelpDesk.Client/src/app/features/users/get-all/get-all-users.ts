import { UserAccountData } from '@/core/business/model/user-account-data';
import { DEFAULT_QUERY_PARAMETERS } from '@/core/business/pagination/default-query-parameters';
import { QueryParameters } from '@/core/business/pagination/query-parameters';
import { UserService } from '@/core/business/services/user.service';
import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Button } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-get-all-users',
  imports: [
    Button,
    TableModule,
    TranslatePipe
  ],
  templateUrl: './get-all-users.html',
  styleUrl: './get-all-users.css',
})
export class GetAllUsersComponent {
  private readonly userService = inject(UserService);

  users: UserAccountData[] = [];

  totalRecords = 0;
  rows = DEFAULT_QUERY_PARAMETERS.pageSize;
  first = 0;
  loading = false;

  onGetAll(): void {
    const queryParameters: QueryParameters = {
      ...DEFAULT_QUERY_PARAMETERS,
    };

    this.userService
      .getAllUsers(
        queryParameters,
      )
      .subscribe({
        next: (response) => {
          console.log(response.time);
          console.log(response.message);
          console.log(response.data);

          const pagedResult = response.data?.pagedResult;

          if (!pagedResult) {
            this.handleGetAllUserError(
              new Error('Get all users response did not contain user data.')
            );

            return;
          }

          this.users = pagedResult.items;
          this.totalRecords = pagedResult.totalCount;
          this.rows = pagedResult.pageSize;
          this.first = (pagedResult.pageNumber - 1) * pagedResult.pageSize;

          this.loading = false;
        },

        error: (error) => {
          this.loading = false;
          this.handleGetAllUserError(error);
        },
      });
  }

  private handleGetAllUserError(error: unknown): void {
    this.loading = false;

    console.error('get all users failed:', error);
  }
}
