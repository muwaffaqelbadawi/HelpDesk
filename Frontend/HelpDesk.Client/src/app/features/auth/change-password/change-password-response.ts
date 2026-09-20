import { TokenResult } from '../../../core/models/token-result';
import { UserAccountData } from '../models/user-account-data';

export interface changePasswordResponse {
  userAccountData: UserAccountData;
  tokenResult: TokenResult;
}
