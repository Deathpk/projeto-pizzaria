import { Request, Response } from "express";
import CreateNewOrderService from "../../services/order/CreateNewOrderService";

class CreateNewOrderController 
{
    async handle(req: Request, res: Response) {
        const { table, name } = req.body;
        const service = new CreateNewOrderService();
        const order = await service.execute({table, name});
        res.status(201).json({order});
    }
}

export default CreateNewOrderController;