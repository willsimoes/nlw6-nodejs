import { NextFunction, Request, Response } from "express";

/**
 * Verifica se o usuário é administrador
 * @param request request 
 * @param response response 
 * @param nextFunction próxima função a ser delegada execução
 */
export function ensureAdmin(request: Request, response: Response, nextFunction: NextFunction) {
    const admin = false;

    if (admin) {
        return nextFunction();
    }

    // status 401: unathoriezed
    return response.status(401).json({ error: "Usuário sem autorização." });
}