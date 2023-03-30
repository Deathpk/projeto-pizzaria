import { prismaClient } from "../../prisma";

class RemoveItemFromOrderService
{
    async execute(order_item_id: string): Promise<void> {
        const orderItemExists = await prismaClient.item.count({
            where: { id: order_item_id }
        })

        if(!orderItemExists) {
            throw new Error("No item with the provided Id has been found.");
        }

        await prismaClient.item.delete({
            where: { id: order_item_id }
        });
    }
}

export default RemoveItemFromOrderService;