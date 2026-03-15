const express = require('express');

const app = express();

const PORT : number = 3000;

app.get('/' , (req : any, res : any) => {
    res.send("Pong");
});
 
app.listen(PORT , async () => {
    console.log(`Server started at PORT ${PORT}`);
    console.log("Press ctrl + c to end the process");
});