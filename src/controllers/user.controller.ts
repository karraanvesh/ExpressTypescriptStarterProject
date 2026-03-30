import pkg from 'express';
const { Request, Response } = pkg;

function getQueryParams(str) {
    let n = str.length;
    let i = 0;

    while(i < n && str[i] != '?') {
        i++;
    }

    let result = {};

    i++;

    while(i < n) {
        let nameOfKey ="", value ="";

        while(i < n && str[i] != '=') {
            nameOfKey += str[i];
            i++;
        }

        i++;

        while(i < n && str[i] != '&') {
            value += str[i];
            i++;
        }

        i++;

        result[nameOfKey] = value;
    }

    return result;
}

export const userHandler = (req : Request, res : Response) => {
    res.status(201).send("Hey , there");
}