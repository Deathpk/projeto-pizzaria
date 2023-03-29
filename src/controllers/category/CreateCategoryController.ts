import {Request, Response} from "express";
import CreateCategoryService from "../../services/category/CreateCategoryService";

class CreateCategoryController
{
    async handle(req: Request, res: Response) {
        const service = new CreateCategoryService();
        const category = await service.execute({
            name: req.body.name
        });

        return res.json({ 
            success: true,
            message: 'Category created with success',
            category
        })
    }
}

export default CreateCategoryController;