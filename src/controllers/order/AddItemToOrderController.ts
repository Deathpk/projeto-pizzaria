import { Request, Response } from "express";
import AddItemToOrderService from "../../services/order/AddItemToOrderService";

class AddItemToOrderController
{
    async handle(req: Request, res: Response) {
        const { order_id, amount, product_id } = req.body;
        const service = new AddItemToOrderService();
        const orderItem = await service.execute({
            order_id,
            product_id,
            amount
        });
        
        res.json(orderItem);
    }
}

export default AddItemToOrderController;