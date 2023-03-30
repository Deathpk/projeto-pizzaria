import { Request, Response } from "express";
import SendOrderService from "../../services/order/SendOrderService";

class SendOrderController
{
    async handle(req: Request, res: Response) {
        const { order_id } = req.body;
        const service = new SendOrderService();
        const order = await service.execute(order_id);
        res.json(order);
    }
}

export default SendOrderController;