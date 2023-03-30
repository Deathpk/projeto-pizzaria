import { prismaClient } from "../../prisma";

class SendOrderService
{
    async execute(order_id: string) {
        const orderItemExists = await prismaClient.order.count({
            where: { id: order_id } 
        });

        if(!orderItemExists) {
            throw new Error("The requested order does not exist.");
        }

        return await prismaClient.order.update({
            where: { id: order_id },
            data: {
                deaft: false
            }
        });
    }    
}

export default SendOrderService;