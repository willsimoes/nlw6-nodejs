import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import { router } from "./routes";

import "./database";

const app = express();
app.use(express.json());

// funciona como middleware para inserir as rotas dentro do express
// middleware: interceptação da requisição, pode interrompe-la por completo ou adicionar alguma informação
app.use(router);

/**
 * Por padrão o Express não consegue tratar requisições Async, 
 * onde é necessário a instalação de uma biblioteca para isso: express-async-errors
 */
app.use((erro: Error, request: Request, response: Response, next: NextFunction) => {
    if (erro instanceof Error) {
        return response.status(400).json({
            error: erro.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Erro interno da aplicação."
    });
});

app.listen(3000, () => console.log("Servidor está rodando."));