import { TokenResult } from '../../../core/models/token-result';
import { UserAccountData } from '../../../shared/responses/data/user-account-data';

export interface changePasswordResponse {
  userAccountData: UserAccountData;
  tokenResult: TokenResult;
}
