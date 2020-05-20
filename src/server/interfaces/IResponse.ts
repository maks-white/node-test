export interface IResponse<T> extends Response {
  data?: T;
  message?: string;
  success?: boolean;
}

export interface Response {
  code: number;
  status: string;
}
