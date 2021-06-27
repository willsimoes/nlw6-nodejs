import { NextFunction, Request, Response } from "express";
/**
 * Por padrão o Express não consegue tratar requisições Async, 
 * onde é necessário a instalação de uma biblioteca para isso: express-async-errors
 */

import "express-async-errors";


/**
 * Trata erros inesperados na aplicação
 * @param erro erro
 * @param request request
 * @param response response
 * @param nextFunction próxima função a ser delegada execuçã
 * @returns response com erro tratado
 */
export function handleErros(erro: Error, request: Request, response: Response, nextFunction: NextFunction) {
    if (erro instanceof Error) {
        return response.status(400).json({
            error: erro.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Erro interno da aplicação."
    });
}
