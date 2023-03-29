import { Request, Response } from "express";
import CancelOrderService from "../../services/order/CancelOrderService";

class CancelOrderController
{
    async handle(req: Request, res: Response) {
        const order_id = req.query.order_id as string;
        const service = new CancelOrderService();
        await service.execute(order_id);
        return res.status(200).json({
            success: true
        });
    }
}

export default CancelOrderController;