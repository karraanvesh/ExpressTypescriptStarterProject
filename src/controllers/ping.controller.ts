import express from 'express';
import fs from 'fs/promises';
import {InternalServerError} from './../utils/errors/app.error.ts';

export const pingHandler = async (req : express.Request, res : express.Response , next : express.NextFunction) => {

    try {
        const data = await fs.readFile(process.cwd + './../.abc');
        res.status(200).json({
            message : "Pong",
            success : true,
            data : data.toString()
        });
    } catch (error) {
        throw new InternalServerError("Internal Server Error")
    }
}