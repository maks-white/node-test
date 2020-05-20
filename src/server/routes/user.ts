import { Router } from 'express';
import { IResponse, IUser } from '../interfaces';
import { UserController } from '../controllers';
import { AuthService, UserService } from '../services';

const router = Router();
const authService = new AuthService();
const userService = new UserService();
const userController = new UserController();

// Gets list of users
router.get('/', async (req, res) => {
  res.send(await userController.read());
});

// Generates new random user
router.get('/generate', async (req, res) => {
  const response: IResponse<IUser> = await userService.getRandom();
  const result: IResponse<IUser> = (response && response.data && response.code === 200)
    ? await userController.create(response.data) : response;
  res.send(result);
});

// Verifies user credentials
router.post('/login', async (req, res) => {
  const { body } = req;
  const result: IResponse<IUser> = await authService.login(body.email, body.password);
	res.send(result);
});

// Updates data of user. !Requires Basic auth!
router.put('/:id', async (req, res) => {
  const { body, params: { id } } = req;
  const result: IResponse<IUser> = await userController.update(id, body);
  res.send(result);
});

// Deletes(changes value to removed) user. !Requires Basic auth!
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
	res.send(await userController.delete(id));
});

export default router;

