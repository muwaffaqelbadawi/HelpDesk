import { EmployeeData } from './employee-data';

export interface UserAccountData {
  userId: string;
  userName: string;
  email: string;
  rowVersion: number[] | null;
  mustResetPassword: boolean;
  roles: string[];
  employee: EmployeeData | null;
}
