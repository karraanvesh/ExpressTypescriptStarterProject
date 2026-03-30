import express from 'express';
import {serverConfig} from './config/index.ts';
import { userRouter } from './routers/v2/user.router.ts';
import v1Router from './routers/v1/index.router.ts';
import * as z from 'zod';

const app = express();

app.use(express.json());
app.use(express.text());

app.use('/api/v1' , v1Router);
app.use('/api/v2' , userRouter);
 
app.listen(serverConfig.PORT , async () => {
    console.log(`Server started at PORT ${serverConfig.PORT}`);
    console.log("Press ctrl + c to end the process");
});