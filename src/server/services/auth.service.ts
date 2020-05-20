import { UserController } from '../controllers';
import { IUser, IUserDocument, IResponse } from '../interfaces';
import { CryptoService, ResponseService } from '../services';

/**
 * Service which is responsible for user authorization
 */
export class AuthService {
  private userController = new UserController();
  private cryptoService = new CryptoService();
  private responseService = new ResponseService<IUser>();

  constructor() { }

  /**
   * Verifies user is allow to login
   *
   * @param email - user email
   * @param password - user password
   */
  public async login(email: string, password: string): Promise<IResponse<IUser>> {
    if (!email || !password) return this.responseService.unauthorized();
    const user = await this.findUserByEmail(email);
    const isValid = (user && user.password) ? this.cryptoService.isValueValid(password, user.password) : false;
    return (isValid) ? this.responseService.ok(user) : this.responseService.unauthorized();
  }

  /**
   * Finds and checks user in database
   *
   * @param userEmail - user email
   * @param userPassword - user password
   */
  private async findUserByEmail(userEmail: string): Promise<IUserDocument> {
    const result: IResponse<IUserDocument[]> = await this.userController.read({
      where: { email: userEmail },
    });
    return (result && result.data && result.data[0]) ? result.data[0] : { } as IUserDocument;
  }
}
