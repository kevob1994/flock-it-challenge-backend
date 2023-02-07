import { Router } from 'express';
import passport from 'passport';
import { getInfo } from '../controllers/user.controller';

const userRouter: Router = Router();

userRouter.get('/', passport.authenticate('jwt', { session: false }), getInfo);

export { userRouter };
