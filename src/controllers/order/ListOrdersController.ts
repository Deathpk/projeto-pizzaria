import { Request, Response } from "express";
import ListOrdersService from "../../services/order/ListOrdersService";

class ListOrdersControllers
{
    async handle(req: Request, res: Response) {
        const service = new ListOrdersService();
        const ordersBeingPrepared = await service.execute();
        res.json(ordersBeingPrepared);
    }
}

export default ListOrdersControllers;