export interface ApiResponse<T> {
  message: string;
  time: string;
  data: T | null;
}
