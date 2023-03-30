import { Request, Response } from "express";
import RemoveItemFromOrderService from "../../services/order/RemoveItemFromOrderService";

class RemoveItemFromOrderController
{
    async handle(req: Request, res: Response) {
        const order_item_id = req.query.order_item_id as string;
        const service = new RemoveItemFromOrderService();
        await service.execute(order_item_id);
        res.json({success: true});
    }
}

export default RemoveItemFromOrderController;