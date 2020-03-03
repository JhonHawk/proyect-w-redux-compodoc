import { ApiResponse } from './api-response';

export interface ApiErrorResponse<T1 = any, T2 = any> extends ApiResponse<T1> {
  code?: number;
  errors?: T2;
}
