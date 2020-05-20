import { GenericId, GenericObject, IUser, IUserDocument, IResponse } from '../interfaces';
import User from '../models/UserModel';
import { ResponseService } from '../services';

/**
 * CRUD user controller
 */
export class UserController {
  private responseService = new ResponseService<IUserDocument>();
  private responseArrayService = new ResponseService<IUserDocument[]>();

  constructor() {}

  /**
   * Creates new user according provided data
   *
   * @param data - user data object
   */
	public async create(data: IUser): Promise<IResponse<IUserDocument>> {
    if (!data) return this.responseService.badRequest(`Data is ${data}`);

    const user = new User(data);
    let result: IResponse<IUserDocument>;

    try {
      result = this.responseService.ok(await user.save());
    } catch (error) {
      console.error(error);
      result = this.responseService.internalServerError(error.message);
    }

    return result;
	}

  /**
   * Gets list of users or user by ID
   *
   * @param query - query params
   * @param id - user ID
   */
	public async read(query?: GenericObject): Promise<IResponse<IUserDocument[]>>;
	public async read(query?: GenericObject, id?: GenericId): Promise<IResponse<IUserDocument>>;
	public async read(
    query: GenericObject = {}, id?: GenericId,
  ): Promise<IResponse<IUserDocument> | IResponse<IUserDocument[]>> {
    let result: IResponse<IUserDocument> | IResponse<IUserDocument[]>;

    try {
      if (id) {
        const response = await User.findById(id).where('removed').equals(false);
        result = (response) ? this.responseService.ok(response) : this.responseService.notFound();
      } else {
        result = this.responseArrayService.ok(await User.find(query && query.where).where('removed').equals(false));
      }
    } catch (error) {
      console.log(error);
      result = this.responseService.internalServerError(error.message);
    }

    return result;
	}

  /**
   * Updates existing user item
   *
   * @param id - ID of users
   * @param body - params that will be updated
   */
	public async update(id: GenericId, body: IUser): Promise<IResponse<IUserDocument>> {
    if (!id) return this.responseService.badRequest(`ID is ${id}`);
    if (!body) return this.responseService.badRequest(`ID is ${body}`);
    if (body.removed) body.removed = false;

    let result: IResponse<IUserDocument>;

    try {
      const notRemoved = await User.findById(id).where('removed').equals(false);
      if (!notRemoved) {
        result = this.responseService.notFound();
      } else {
        await User.findByIdAndUpdate(id, body).where('removed').equals(false)
        const response = await User.findById(id).where('removed').equals(false)
        result = response ? this.responseService.ok(response) : this.responseService.notFound();
      }
    } catch (error) {
      console.log(error);
      result = this.responseService.internalServerError(error.message);
    }

    return result;
	}

  /**
   * Deletes user by ID(changes 'removed' field value to true)
   *
   * @param id - user ID
   */
	public async delete(id: GenericId): Promise<IResponse<IUserDocument>> {
    if (!id) return this.responseService.badRequest(`ID is ${id}`);
    let result: IResponse<IUserDocument>;

    try {
      const notRemoved = await User.findById(id).where('removed').equals(false);
      if (!notRemoved) {
        result = this.responseService.notFound();
      } else {
        const response = await User.findByIdAndUpdate(id, { removed: true }).where('removed').equals(false)
        result = response ? this.responseService.ok(response) : this.responseService.notFound();
      }
    } catch (error) {
      console.log(error);
      result = this.responseService.internalServerError(error.message);
    }

    return result;
	}
}
