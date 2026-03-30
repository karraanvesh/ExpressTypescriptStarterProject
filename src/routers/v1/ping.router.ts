import express from 'express';
import { pingHandler } from '../../controllers/ping.controller.ts';
import { validateRequestBody } from '../../validators/index.ts';
import z from 'zod';
import { pingSchema } from '../../validators/ping.validator.ts';

const pingRouter = express.Router();

pingRouter.get('/',  validateRequestBody(pingSchema) , pingHandler);

pingRouter.get('/:user_id/comments' , pingHandler); // after /ping :id is a variable part we need to tell to 
// express that this :id is a variable part so that it can be distinguished and this is how the url params are
// going to be accessed

export default pingRouter;