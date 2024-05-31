export interface ErrorResponse {
  statusCode: number;
  message?: string;
  errorCode?: string;
}

export interface Response<T> {
  isSuccessful: boolean;
  body?: T;
  errorBody?: ErrorResponse;
}
