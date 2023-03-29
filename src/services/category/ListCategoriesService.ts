import { prismaClient } from "../../prisma";

interface ListCategoriesResponse {
    id: string;
    name: string;
}

class ListCategoriesService
{
    async execute(): Promise<ListCategoriesResponse[]> {
        const categories = await prismaClient.category.findMany({
            select: {
                id: true,
                name: true
            }
        });

        return categories;
    }
}

export default ListCategoriesService;