import { TokenResult } from '../../../core/auth/jwt/token-result';
import { UserAccountData } from '../../../core/business/model/user-account-data';

export interface resetPasswordResponse {
  userAccountData: UserAccountData;
  tokenResult: TokenResult;
}
