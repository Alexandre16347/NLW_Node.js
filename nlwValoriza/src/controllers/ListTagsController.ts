import { Request, Response } from "express";
import { ListTagsService } from "../services/ListTagsService";


class ListTagsController {

    async handle(request: Request, response: Response) {
        const listTagssrevice = new ListTagsService();

        const tags = await listTagssrevice.execute();

        return response.json(tags);
    }

}

export {
    ListTagsController
}