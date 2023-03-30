import { Request, Response } from "express";
import DetailsService from "../../services/order/DetailsService";

class OrderDetailsController
{
    async handle(req: Request, res: Response) {
        const order_id  = req.query.order_id as string;
        const service = new DetailsService();
        const details = await service.execute(order_id);
        return res.json(details);
    }
}

export default OrderDetailsController;