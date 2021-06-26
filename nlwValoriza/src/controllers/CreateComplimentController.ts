import { Request, Response } from "express";
import { CreatComplimentService } from "../services/CreateComplimentService";



class CreateComplimentController {

    async handler(request: Request, response: Response) {
        const { tag_id,
            user_receiver,
            message } = request.body;
        const { user_id } = request;

        const createComplimenteService = new CreatComplimentService();

        const compliment = await createComplimenteService.execute({
            tag_id,
            user_receiver,
            user_sender: user_id,
            message
        });

        return response.json(compliment);

    }
}

export { CreateComplimentController }