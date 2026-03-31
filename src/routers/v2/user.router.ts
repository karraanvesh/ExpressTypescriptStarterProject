import {userHandler} from '../../controllers/user.controller.ts';
import express from 'express';
import { userSchema } from './../../validators/user.validator.ts';
import { validateRequestParams, validateRequestQueryParams } from '../../validators/index.ts';
import { userQueryParamsSchema } from './../../validators/user.query.params.validator.ts';

export const userRouter = express.Router();

// middleware demo

// function validateUserName(req : express.Request , res : express.Response , next : express.NextFunction) {
//     let name = req.params.user_name;

//     let userId = Number(name);

//     // console.log(typeof userId);

//     if(isNaN(userId)) {
        
//         res.status(400).json({
//             "message" : "Invalid request",
//             "success" : false,
//             "error" : "Type error"
//         });
//     }
//     next();
// }

userRouter.get('/:user_id/users' , validateRequestQueryParams(userQueryParamsSchema) , userHandler);