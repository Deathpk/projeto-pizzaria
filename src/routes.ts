import {Router} from 'express';
import multer from "multer";
import CreateUserController from './controllers/user/CreateUserController';
import AuthUserController  from './controllers/user/AuthUserController';
import DetailsController from './controllers/user/DetailsController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import CreateCategoryController from './controllers/category/CreateCategoryController';
import ListCategoriesController from './controllers/category/ListCategoriesController';
import CreateProductController from './controllers/product/CreateProductController';
import uploadConfig from './config/multer';

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

router.post('/users', new CreateUserController().handle);
router.post('/login', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailsController().handle);

router.get('/categories', isAuthenticated, new ListCategoriesController().handle);
router.post('/categories', isAuthenticated, new CreateCategoryController().handle);

router.post('/products', isAuthenticated, upload.single('file'), new CreateProductController().handle);

export { router };