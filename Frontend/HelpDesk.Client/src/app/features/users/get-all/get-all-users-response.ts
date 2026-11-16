import { UserAccountData } from "@/core/business/model/user-account-data";
import { PagedResult } from "@/core/business/pagination/paged-result";

export interface GetAllUsersResponse {
  pagedResult: PagedResult<UserAccountData>;
}