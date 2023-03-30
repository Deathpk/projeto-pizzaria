import { prismaClient } from "../../prisma";

interface addItemToOrderRequest {
    order_id: string,
    product_id: string
    amount: number,
}

class AddItemToOrderService
{
    async execute({ order_id, product_id, amount }: addItemToOrderRequest) {
        return await prismaClient.item.create({
            data: {
                order_id: order_id,
                product_id: product_id,
                amount: amount
            }
        });
    }
}

export default AddItemToOrderService;