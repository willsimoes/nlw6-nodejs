import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticate(request: Request, response: Response, nextFunction: NextFunction) {
    // Receber o token
    const authToken = request.headers.authorization;

    // Validar se o token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    // Validar se o token é válido (se está expirado e etc.)
    try {
        const { sub } = verify(token, "eea7a1bf1b6e6b5e904f70a849d01a00") as IPayload;

        request.user_id = sub;

        return nextFunction();
    } catch (err) {
        return response.status(401).end();
    }

}