import express from 'express';
import {userHandler} from '../../controllers/user.controller.ts';

export const userRouter = express.Router();

userRouter.get('/:user_name/users' , userHandler);