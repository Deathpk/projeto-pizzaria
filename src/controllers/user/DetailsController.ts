import {Request, Response} from "express";
import DetailsService from "../../services/user/DetailsService";

class DetailsController
{
    async handle(req: Request, res: Response) {
        const service = new DetailsService();
        const details = await service.execute(req.user_id);
        return res.json(details);
    }
}

export default DetailsController;