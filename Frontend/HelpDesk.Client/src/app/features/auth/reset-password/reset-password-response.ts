import { TokenResult } from '../../../core/models/token-result';
import { UserAccountData } from '../../../shared/responses/data/user-account-data';

export interface resetPasswordResponse {
  userAccountData: UserAccountData;
  tokenResult: TokenResult;
}
