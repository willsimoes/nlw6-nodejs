import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/TagRepository";


import { classToPlain } from "class-transformer";

class ListTagsService {

    async execute() {
        const tagsRepositories = getCustomRepository(TagRepository);

        const tags = await tagsRepositories.find();

        return classToPlain(tags);
    }

}

export { ListTagsService }