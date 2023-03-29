import express, { Request, Response, NextFunction } from "express";
import 'express-async-errors';
import cors from 'cors';
import path from 'path';

import { router } from "./routes"
 
const app = express();
app.use(express.json()); // Middleware que parsea json e que só aceita requests com content-type json.
app.use(cors()); // Para endereços externos conseguirem fazer requisições para nossa api.
app.use(router); // Nossas rotas?
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp'))); // Middleware para retornar arquivos estáticos.

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {
        res.status(400).json({
            error: err.message
        })
    }

    res.status(500).json({
        status: 'error',
        message: 'Ocorreu um erro inesperado.'
    })
});

app.listen(8000, () => { 
    console.log("Server online!!");
});