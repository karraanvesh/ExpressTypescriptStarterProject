import { Sequelize } from "sequelize";
import { dbConfig } from "../../config/index.ts";

const sequelize = new Sequelize({
    dialect : "mysql",
    host : dbConfig.DB_HOST,
    database : dbConfig.DB_NAME,
    password : dbConfig.DB_PASSWORD,
    username : dbConfig.DB_USER,
    logging : true
});

export default sequelize;