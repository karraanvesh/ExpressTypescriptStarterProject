import dotenv from 'dotenv';

type ServerConfig = {
    PORT : number,
};

function loadenv() {
    dotenv.config({debug : true});
    console.log("environment variables loaded");
}

loadenv();
console.log("PORT is : " , process.env.PORT);

export const serverConfig : ServerConfig = {
    PORT : (Number(process.env.PORT) || 3001)
};