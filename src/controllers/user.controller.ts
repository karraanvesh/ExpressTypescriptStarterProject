import pkg from 'express';
const { Request, Response } = pkg;
export const userHandler = (req : Request, res : Response) => {
    console.log("Request received : users ")
    res.status(201).send("Hey , there");
}