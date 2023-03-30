import { prismaClient } from "../../prisma";

class FinishOrderService
{
    async execute(order_id: string): Promise<void> {
        await prismaClient.order.update({
            where: {id: order_id},
            data: {
                status: true
            }
        });
    }
}

export default FinishOrderService;