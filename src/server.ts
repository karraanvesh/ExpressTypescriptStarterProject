import express from 'express';
import {serverConfig} from './config/index.ts';
import pingRouter from './routers/v1/ping.router.ts';
import { userRouter } from './routers/v2/user.router.ts';

const app = express();

app.use('/api/v1' ,pingRouter);
app.use('/api/v2' , userRouter);
 
app.listen(serverConfig.PORT , async () => {
    console.log(`Server started at PORT ${serverConfig.PORT}`);
    console.log("Press ctrl + c to end the process");
});