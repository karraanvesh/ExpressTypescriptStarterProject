import express from 'express';
import {serverConfig} from './config/index.ts';
import pingRouter from './routers/ping.router.ts';

const app = express();

app.get('/ping' ,pingRouter);
 
app.listen(serverConfig.PORT , async () => {
    console.log(`Server started at PORT ${serverConfig.PORT}`);
    console.log("Press ctrl + c to end the process");
});