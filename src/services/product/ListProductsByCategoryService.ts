import { prismaClient } from "../../prisma";

class ListProductsByCategoryService
{
    async execute(category_id: string) {
        return await prismaClient.product.findMany({
            where: {
                category_id: category_id
            }
        });
    }
}



export default ListProductsByCategoryService;