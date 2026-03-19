import pkg from 'express';
const { Request, Response } = pkg;
export const pingHandler = (req : Request, res : Response) => {
    res.send("Pong");
}