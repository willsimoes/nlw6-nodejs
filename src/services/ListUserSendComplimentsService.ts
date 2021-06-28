import { getCustomRepository } from "typeorm"
import { ComplimentRepository } from "../repositories/ComplimentRepository";

class ListUserSendComplimentsService {
    async execute(user_id: string) {
        const complimentsRespository = getCustomRepository(ComplimentRepository);
        const compliments = await complimentsRespository.find({
            where: {
                user_sender: user_id
            },
            relations: ["userSender", "userReceiver", "tag"],
        });

        return compliments;
    }
}

export { ListUserSendComplimentsService }