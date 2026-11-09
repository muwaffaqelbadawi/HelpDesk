import { TokenResult } from '../../../core/auth/jwt/token-result';
import { UserAccountData } from '../../../shared/responses/user-account-data';

export interface changePasswordResponse {
  userAccountData: UserAccountData;
  tokenResult: TokenResult;
}
