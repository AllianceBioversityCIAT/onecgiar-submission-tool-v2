export interface MainResponse<T> {
  data: T;
  success: boolean;
  errorDetail?: string;
}

export interface ErrorResponse {
  error: boolean;
  detail: string;
}

export interface LoginRes {
  data: string;
  status: number;
  message: string;
  timestamp: string;
  path: string;
}
