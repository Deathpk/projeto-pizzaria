import { prismaClient } from "../../prisma";

class CancelOrderService
{
    async execute(order_id: string): Promise<void> {
        const order = await prismaClient.order.findFirst({
            where: { id: order_id }
        });

        if(!order) {
            throw new Error("Order not found");
        }

        await prismaClient.order.delete({
            where:{ id: order_id }
        });
    }
}

export default CancelOrderService;