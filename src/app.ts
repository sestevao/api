import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import "express-async-errors";

import createConnection from './database';
import { router } from './routes';
import { AppError } from './errors/AppError';

//creates the connection with the database
createConnection();
const app = express();

/**
 * GET => SEARCH
 * POST => SAVE
 * PUT => CHANGE
 * DELETE => DELETE
 * PATCH => SPECIFIC CHANGE
 */

app.use(express.json());
app.use(router);

//middleware custom error
app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({message: err.message});
    }

    //erro de servidor
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error: ${err.message}",
    });
});

export { app };
