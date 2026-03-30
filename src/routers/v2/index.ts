import { userRouter } from "./user.router.ts";
import express from 'express';

const v2Router = express.Router();

v2Router.use('/users' , userRouter);

export default v2Router;