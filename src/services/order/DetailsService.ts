import { prismaClient } from "../../prisma";

class DetailsService
{
    async execute(order_id: string) {
        return await prismaClient.item.findMany({
            where: { order_id: order_id },
            include: {
                product: true,
                order: true
            }
        });
    }
}

export default DetailsService;