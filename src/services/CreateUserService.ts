import { UsersRepository } from "../repositories/UserRepository"
import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";

interface IUserRequest {
    name: string;
    email: string;
    password: string;
    admin?: boolean;
}

class CreateUserService {


    async execute({ name, email, password, admin }: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepository);

        if (!email) {
            throw new Error("E-mail obrigatório.");
        }

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if (userAlreadyExists) {
            throw new Error("Usuário já existe.");
        }

        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            password: passwordHash,
            admin
        });

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService }