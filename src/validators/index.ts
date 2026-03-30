import { ZodAny } from "zod";
import pkg from 'express';
const {Request , Response , NextFunction} = pkg;
/**
 * 
 * @param schema - Zod Schema to validate the request body
 * @returns - Middleware function to validate the request body
 */


export const validateRequestBody = (schema : ZodAny) => {
    return async (req : Request , res : Response , next : NextFunction ) => {
        try {
            console.log("received request : " , req.body);
            await schema.parse(req.body);
            
            console.log("Request is vaid");
            next();

        } catch (error) {
            // If the validation is failed
            // equivalent to res = function (res) => {res.status(400); return res; }

            console.log("In catch block");
            res.status(400).json({
                message : "Invalid request body",
                success : false,
                error : error
            }); 
        }
    }
};