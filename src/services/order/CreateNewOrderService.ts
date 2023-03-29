import { prismaClient } from "../../prisma"

interface CreateNewOrderRequest {
    table: number,
    name: string|null
}

class CreateNewOrderService
{
    async execute({ table, name }: CreateNewOrderRequest) {
        return await prismaClient.order.create({
            data: {
                table: table,
                name: name
            }
        });
    }
}

export default CreateNewOrderService;