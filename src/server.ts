import express from 'express';
import {serverConfig} from './config/index.ts';
import v1Router from './routers/v1/index.router.ts';
import v2Router from './routers/v2/index.ts';
import * as z from 'zod';

const app = express();

app.use(express.json());
app.use(express.text());

app.use('/api/v1' , v1Router);
app.use('/api/v2' , v2Router);
 
app.listen(serverConfig.PORT , async () => {
    console.log(`Server started at PORT ${serverConfig.PORT}`);
    console.log("Press ctrl + c to end the process");

    // zod library demo
    // const zodSchema = z.object({
    //     name : z.string(),
    //     age : z.number().int().positive()
    // });

    // const inputObj = {
    //     name : "Anjali",
    //     age : -26
    // };

    // try {
    //     const result = zodSchema.parse(inputObj);
    //     console.log("inputObj is valid");
    // } catch (error) {
    //     console.log("Zod error is :" , error);
    // }
});