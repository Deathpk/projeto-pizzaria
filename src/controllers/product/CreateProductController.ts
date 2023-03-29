import { Request, Response } from "express";
import CreateProductService from "../../services/product/CreateProductService";

class CreateProductController
{
    async handle(req: Request, res: Response) {
        const { name, price, description, category_id } = req.body;
        
        if(!req.file) {
            throw new Error("Error uploading the image file.");
        }

        const { originalname, filename: banner } = req.file;

        const service = new CreateProductService();
        const product = await service.execute({ name, price, description, banner, category_id });
        return res.status(201).json(product);
    }
}

export default CreateProductController;