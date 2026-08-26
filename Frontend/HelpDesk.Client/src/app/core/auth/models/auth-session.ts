import { UserAccountData } from '../../../features/auth/models/user-account-data';

export interface AuthSession {
  userAccount: UserAccountData;
}
