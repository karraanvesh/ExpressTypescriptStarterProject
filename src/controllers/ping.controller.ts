import express from 'express';
import fs from 'fs/promises';
import fsCall from 'fs';
import {InternalServerError} from './../utils/errors/app.error.ts';

export const pingHandler = async (req : express.Request, res : express.Response , next : express.NextFunction) => {
    try {
        await fs.readFile(process.cwd + './../.abc');
        res.status(200).json({
            message : "Pong",
            success : true,
        });
    } catch (error) {
        throw new InternalServerError("Something went wrong !!!");
    }
}

export const pingHelloHandler = async (req : express.Request , res : express.Response , next : express.NextFunction) => {
    try {
        await fs.readFile(process.cwd + "./../.env");
        res.status(200).json({
            message : "Ok",
            success : true
        })
    } catch (error) {
        throw new InternalServerError("Something went wrong !!!");
    }
}