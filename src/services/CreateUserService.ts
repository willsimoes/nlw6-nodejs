import { UsersRepository } from "../repositories/UserRepository"
import { getCustomRepository } from "typeorm";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean
}

class CreateUserService {


    async execute({ name, email, admin }: IUserRequest) {
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

        const user = usersRepository.create({
            name,
            email,
            admin
        });

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService }