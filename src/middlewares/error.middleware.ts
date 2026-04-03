import express from 'express';
export const genericErrorHandler = (err : any , req : express.Request , res : express.Request , next : express.NextFunction) => {

    console.log("In error middleware of express");
    console.log(err);

    res.status(err.statusCode).json({
        message : err.message,
        success : false
    });
}