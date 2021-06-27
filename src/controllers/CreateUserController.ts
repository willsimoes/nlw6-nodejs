import { Request, Response } from "express"
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {

    async handle(request: Request, response: Response) {
        const { name, email, admin } = request.body;

        const createUserService = new CreateUserService();

        let user; 
        try {
            user = await createUserService.execute({ name, email, admin });
        } catch(erro) {
            return response.status(400).json({erro: erro.message});
        }

        return response.json(user);
    }

}

export { CreateUserController }

