import { CreateUserAccountRequest } from "@/features/users/create/create-user-account-request";
import { CreateUserAccountResponse } from "@/features/users/create/create-user-account-response";
import { ApiResponse } from "@/core/business/model/api-response";
import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { GetAllUsersResponse } from "@/features/users/get-all/get-all-users-response";
import { QueryParameters } from "../pagination/query-parameters";
import { GetByIdUserQuery } from "@/features/users/get-by-id/get-by-id-user-query";
import { GetByIdUserResponse } from "@/features/users/get-by-id/get-by-id-user-response";
import { GetMyAccountResponse } from "@/features/users/get-my/get-my-account-response";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http = inject(HttpClient);

  getAllUsers(
    queryParameters: QueryParameters,
  ): Observable<ApiResponse<GetAllUsersResponse>> {
    return this.http.get<ApiResponse<GetAllUsersResponse>>(
      `${environment.apiUrl}/users`,
      {
        params: {
          ...queryParameters,
        },
      },
    )
  }

  getCurrentUser(): Observable<ApiResponse<GetMyAccountResponse>> {
    return this.http.get<ApiResponse<GetMyAccountResponse>>(
      `${environment.apiUrl}/users/me`,
    );
  }

  getByIdUser(query: GetByIdUserQuery)
    : Observable<ApiResponse<GetByIdUserResponse>> {
    return this.http.post<ApiResponse<GetByIdUserResponse>>(
      `${environment.apiUrl}admin/users/${query.userId}`,
      query,
    );
  }

  createUserAccount(request: CreateUserAccountRequest)
    : Observable<ApiResponse<CreateUserAccountResponse>> {
    return this.http.post<ApiResponse<CreateUserAccountResponse>>(
      `${environment.apiUrl}/admin/users`,
      request,
    );
  }
}