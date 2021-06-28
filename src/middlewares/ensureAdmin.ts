import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UserRepository";

/**
 * Verifica se o usuário é administrador
 * @param request request 
 * @param response response 
 * @param nextFunction próxima função a ser delegada execução
 */
export async function ensureAdmin(request: Request, response: Response, nextFunction: NextFunction) {
    const { user_id } = request;

    const userRepository = getCustomRepository(UsersRepository);
    const { admin } = await userRepository.findOne(user_id);

    if (admin) {
        return nextFunction();
    }

    // status 401: unathoriezed
    return response.status(401).json({ error: "Usuário sem autorização." });
}