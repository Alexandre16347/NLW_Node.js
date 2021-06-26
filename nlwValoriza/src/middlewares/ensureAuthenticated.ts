import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {

    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, "1bc314822ff67fa3363614c00ced5b8d") as IPayload;

        request.user_id = sub;

        return next();
    } catch (err) {
        return response.status(401).end();
    }



}

