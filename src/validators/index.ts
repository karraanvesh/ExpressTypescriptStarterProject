import { ZodAny } from "zod";
import express from 'express';
import type { promises } from "node:dns";
import logger from "../config/logger.config.ts";
/**
 * 
 * @param schema - Zod Schema to validate the request body
 * @returns - Middleware function to validate the request body
 */

function createPromise(result : number) {
    return new Promise(function executor(resolve , reject) {

        if(isNaN(result)) {
            reject("Request params cannot be converted to a valid number");
        } else {
            resolve("Valid request params");
        }
    });
}

function isValidNumber(req : express.Request) {
    let result = Number(req.params.user_id);

    console.log(`In isValidNumber function result is ${result}`);

    var obj = createPromise(result);

    return obj;
}


export const validateRequestBody = (schema : ZodAny) => {
    return async (req : express.Request , res : express.Response , next : express.NextFunction ) => {
        try {
            logger.info("Validating request body");
            await schema.parse(req.body);

            logger.info("Request body is valid");
            next();

        } catch (error) {
            // If the validation is failed
            // equivalent to res = function (res) => {res.status(400); return res; }

            logger.error("In catch block");
            res.status(400).json({
                message : "Invalid request body",
                success : false,
                error : error
            }); 
        }
    }
};

export const validateRequestParams = (schema : ZodAny) => {
    return async (req : express.Request , res : express.Response , next : express.NextFunction ) => {
        try {
           // console.log("received request : " , req.params);
            await schema.parse(req.params);
            await isValidNumber(req);
            
            console.log("Request params is vaid");
            next();

        } catch (error) {
            // If the validation is failed
            // equivalent to res = function (res) => {res.status(400); return res; }

           // console.log("In catch block of user request params");
            res.status(400).json({
                message : "Invalid request params",
                success : false,
                error : error
            }); 
        }
    }
};

export const validateRequestQueryParams = (schema : ZodAny) => {
    return async (req : express.Request , res : express.Response , next : express.NextFunction ) => {
        try {
            // console.log("received request : " , req.query);

            const invalidData = "Dummy data";

            const queryParamsObj = {
                name : req.query.name,
                designation : req.query.designation,
                company : req.query.company,
                age : Number(req.query.age) || invalidData,
                salary : Number(req.query.salary) || invalidData
            }

            console.log(queryParamsObj);

            await schema.parse(queryParamsObj);
            
            console.log("Request query params is vaid");
            next();

        } catch (error) {
            // If the validation is failed
            // equivalent to res = function (res) => {res.status(400); return res; }

            console.log("In catch block of user request query params");
            res.status(400).json({
                message : "Invalid request query params",
                success : false,
                error : error
            }); 
        }
    }
};