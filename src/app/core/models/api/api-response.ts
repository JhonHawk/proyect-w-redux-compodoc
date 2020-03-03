export interface ApiResponse<T = any> {
  httpStatus: number;
  message?: string;
  data?: T;
}
