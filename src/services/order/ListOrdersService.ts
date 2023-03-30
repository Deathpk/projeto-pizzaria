import { Order } from "@prisma/client";
import { prismaClient } from "../../prisma";

class ListOrdersService
{
    async execute() {
        return await prismaClient.order.findMany({
            where: { deaft: false, status: false },
            select: {
                id: true,
                table: true,
                status: true,
                name: true,
                created_at: true
            },
            orderBy: {
                created_at: 'desc'
            }
        });
    }
}

export default ListOrdersService;