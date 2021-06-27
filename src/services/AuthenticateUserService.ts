import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UserRepository"

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    async execute({ email, password }: IAuthenticateRequest) {
        const userRepository = getCustomRepository(UsersRepository);

        const user = await userRepository.findOne({ email });

        if (!user) {
            throw new Error("E-mail ou senha incorreto.");
        }

        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new Error("E-mail ou senha incorreto.");
        }

        // secretOrPrivateKey gerado a partir de md5hashgenerator.com
        // o ideal é que seja uma variável de ambiente
        const token = sign(
            { email: user.email },
            "eea7a1bf1b6e6b5e904f70a849d01a00",
            {
                subject: user.id,
                expiresIn: "1d"
            });

        return token;
    }
}

export { AuthenticateUserService }