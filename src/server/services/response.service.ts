import { RESPONSES } from '../utils/constants';
import { IResponse } from '../interfaces';

export class ResponseService<T> {
  constructor () {}

  public ok(data: T, message?: string): IResponse<T> {
    return { ...this.getResposeByCode(200), message: message, data: data, success: true };
  }

  public badRequest(message?: string): IResponse<T> {
    return { ...this.getResposeByCode(400), message: message, success: false };
  }

  public notFound(message?: string): IResponse<T> {
    return { ...this.getResposeByCode(404), message: message, success: false };
  }

  public internalServerError(message?: string): IResponse<T> {
    return { ...this.getResposeByCode(500), message: message, success: false };
  }

  public unauthorized(message?: string): IResponse<T> {
    return { ...this.getResposeByCode(401), message: message, success: false };
  }

  /**
   * Retrieves error from the list by code
   *
   * @param code - error code
   */
  private getResposeByCode(code: number): IResponse<T> {
    let result: IResponse<T> = { } as IResponse<T>;

    RESPONSES.forEach((response: IResponse<T>) => {
      if (code === response.code) result = response;
    });

    return result;
  }
}
