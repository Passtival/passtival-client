export interface ApiResponse<T> {
  code: number;
  message: string;
  result: T;
}

export interface responseTypes {
  code: number;
  message: string;
}
