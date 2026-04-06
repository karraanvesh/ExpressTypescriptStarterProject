import { AsyncLocalStorage } from "async_hooks";
import type {Request , Response , NextFunction } from "express";
import {v4 as uuidV4} from 'uuid';
import { asyncLocalStorage } from "../utils/helpers/request.helpers.ts";

export const attachCorrelationIdMiddleware = (req : Request , res : Response , next : NextFunction) => {
    // Generates a unique correlation Id
    const correlationId = uuidV4();

    // Attach the correlation ID to the request object
    req.headers["x-correlation-id"] = correlationId;

    // call the next middleware to route handler
    asyncLocalStorage.run( {correlationId: correlationId }, () => {
        next();
    });
}