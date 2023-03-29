import { prismaClient } from "../../prisma"

interface CreateCategoryRequest {
    name: string;
}

interface CreateCategoryResponse {
    id: string;
    name: string;
}

class CreateCategoryService
{
    async execute ({ name }: CreateCategoryRequest): Promise<CreateCategoryResponse> {

        if(!name) {
            throw new Error("The category name is required");
        }

        const categoryAlreadyExists = await prismaClient.category.findFirst({
            where: {
                name: name
            }
        });

        if(categoryAlreadyExists) {
            throw new Error("The given category already exists.")
        }

        const category = await prismaClient.category.create({
            data: {
                name: name
            },
            select: {
                id: true,
                name: true
            }
        }) as CreateCategoryResponse;

        return category;
    }
}

export default CreateCategoryService;