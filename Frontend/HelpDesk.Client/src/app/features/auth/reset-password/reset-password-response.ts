import { TokenResult } from '../../../core/models/token-result';
import { UserAccountData } from '../models/user-account-data';

export interface resetPasswordResponse {
  userAccountData: UserAccountData;
  tokenResult: TokenResult;
}
