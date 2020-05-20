import axios from 'axios';
import {
  IUser, IRandomUser, IRandomUserResponse, IRandomUserResponseData, IResponse,
} from '../interfaces';
import { CryptoService, ResponseService } from '../services';

/**
 * Service that allows create random users from https://randomuser.me/api/
 */
export class UserService {
  private randomUserUrl: string = 'https://randomuser.me/api/';
  private responseService = new ResponseService<IUser>();
  private cryptoService = new CryptoService();

  constructor() { }

  /**
   * Gets random user
   */
  public async getRandom(): Promise<IResponse<IUser>> {
    const result: IRandomUserResponse = await axios.get(this.randomUserUrl);

    if (result && result.status === 200) {
      return this.responseService.ok(await this.parseUserObject(result.data));
    } else {
      return this.responseService.internalServerError();
    }
  }

  /**
   * Parses object from 'https://randomuser.me/api/' to proper value
   *
   * @param data - user object from 'https://randomuser.me/api/'
   */
  private async parseUserObject(data: IRandomUserResponseData): Promise<IUser> {
    let result: IUser = {} as IUser;
    const firstOne: IRandomUser = data.results[0];

    result = {
      name: `${firstOne.name.first} ${firstOne.name.last}`,
      gender: firstOne.gender,
      email: firstOne.email,
      picture: firstOne.picture.medium,
      password: await this.cryptoService.encryptValue(firstOne.login.password),
      removed: false,
    };

    return result;
  }
}
