import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";



class CreateTagService {

    async execute(name: string) {
        const tagsRepositories = getCustomRepository(TagsRepositories);

        if (!name) {
            throw new Error("Incorrect name!");
        }

        const tagAlreadExists = await tagsRepositories.findOne({
            name,
        });

        if (tagAlreadExists) {
            throw new Error("Tag alread exists!");
        }

        const tag = tagsRepositories.create({
            name,
        });

        await tagsRepositories.save(tag);

        return tag;
    }

}

export { CreateTagService };