export interface resetPasswordRequest {
  userId: string;
  resetToken: string;
  newPassword: string;
}
