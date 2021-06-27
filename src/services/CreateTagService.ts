import { getCustomRepository } from "typeorm"
import { TagRepository } from "../repositories/TagRepository";


class CreateTagService {

    async execute(name: string) {
        const tagsRepository = getCustomRepository(TagRepository);

        if (!name) {
            throw new Error("Nome obrigatório.");
        }

        const tagAlreadyExists = await tagsRepository.findOne({ name });

        if (tagAlreadyExists) {
            throw new Error("Tag já existe.");
        }

        const tag = tagsRepository.create({ name });

        await tagsRepository.save(tag);

        return tag;
    }

}

export { CreateTagService }