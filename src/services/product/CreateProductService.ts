import { Product } from "@prisma/client";
import { prismaClient } from "../../prisma";

interface CreateProductRequest {
    name: string,
    price: string,
    description: string,
    banner: string,
    category_id: string
}

class CreateProductService 
{
    async execute({ name, price, description, banner, category_id }: CreateProductRequest): Promise<Product> {
        return await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id
            }
        });
    }
}

export default CreateProductService;