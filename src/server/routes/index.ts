import { Router } from 'express';
import user from './user';
import { API } from '../utils';

const router = Router();

router.use(API.USER, user);

export default router;
