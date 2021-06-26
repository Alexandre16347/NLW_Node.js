import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUsersService";



class ListUsersController {
    async handle(request: Request, response: Response) {

        const listUsersController = new ListUsersService();

        const users = await listUsersController.execute();

        return response.json(users);

    }
}


export {
    ListUsersController
}