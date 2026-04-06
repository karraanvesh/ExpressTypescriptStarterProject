import express from 'express';
import fs from 'fs/promises';
import {InternalServerError} from './../utils/errors/app.error.ts';
import logger from '../config/logger.config.ts';

export const pingHandler = (req : express.Request, res : express.Response , next : express.NextFunction) => {
    logger.info("Ping request received");
    res.status(200).json({message : "Pong"});
}

export const pingHelloHandler = async (req : express.Request , res : express.Response , next : express.NextFunction) => {

    try {
        const filepath = process.cwd + "./../package.json";
        const data = await fs.readFile(filepath); 

        res.status(200).json({
            message : "Ok",
            success : true,
            data : data.toString()
        });
    } catch (error) {
        throw new InternalServerError("Something went wrong !!!");
    }
}