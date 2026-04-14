import { Model, type CreationOptional, type InferAttributes, type InferCreationAttributes } from "sequelize";
import sequelize from "./sequelize.ts";

class Hotel extends Model<InferAttributes<Hotel> , InferCreationAttributes<Hotel>> {
    declare id : CreationOptional<number>;
    declare name : string;
    declare address : string;
    declare location : string;
    declare createdAt : CreationOptional<Date>;
    declare updatedAt : CreationOptional<Date>;
    declare rating?: number;
    declare rating_count?: number;
}

Hotel.init({
    id : {
        type : "INTEGER",
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : "STRING",
        allowNull : false,
    },
    address : {
        type : "STRING",
        allowNull : false,
    },
    location : {
        type : "STRING",
        allowNull : false,
    },
    createdAt : {
        type : "DATE",
        defaultValue : new Date(),
    },
    updatedAt : {
        type : "DATE",
        defaultValue : new Date(),
    },
    rating : {
        type : "FLOAT",
        defaultValue : null,
    },
    rating_count : {
        type : "INTEGER",
        defaultValue : null
    }
} , {
    sequelize: sequelize,
    tableName :"hotels",
    underscored : true, // createdAt --> created_At
    timestamps : true

});

export default Hotel;