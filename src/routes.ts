import {Router} from 'express';
import multer from "multer";
import CreateUserController from './controllers/user/CreateUserController';
import AuthUserController  from './controllers/user/AuthUserController';
import DetailsController from './controllers/user/DetailsController';
import OrderDetailsController from './controllers/order/OrderDetailsController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import CreateCategoryController from './controllers/category/CreateCategoryController';
import ListCategoriesController from './controllers/category/ListCategoriesController';
import CreateProductController from './controllers/product/CreateProductController';
import uploadConfig from './config/multer';
import ListProductsByCategoryController from './controllers/product/ListProductsByCategoryController';
import CreateNewOrderController from './controllers/order/CreateNewOrderController';
import CancelOrderController from './controllers/order/CancelOrderController';
import AddItemToOrderController from './controllers/order/AddItemToOrderController';
import RemoveItemFromOrderController from './controllers/order/RemoveItemFromOrderController';
import SendOrderController from './controllers/order/SendOrderController';
import ListOrdersControllers from './controllers/order/ListOrdersController';
import FinishOrderController from './controllers/order/FinishOrderController';

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

router.post('/users', new CreateUserController().handle);
router.post('/login', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailsController().handle);

router.get('/categories', isAuthenticated, new ListCategoriesController().handle);
router.post('/categories', isAuthenticated, new CreateCategoryController().handle);

router.post('/products', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get('/products', isAuthenticated, new ListProductsByCategoryController().handle);

router.post('/orders', isAuthenticated, new CreateNewOrderController().handle);
router.get('/orders', isAuthenticated, new ListOrdersControllers().handle);
router.get('/orders/details', isAuthenticated, new OrderDetailsController().handle);
router.delete('/orders', isAuthenticated, new CancelOrderController().handle);
router.post('/orders/add', isAuthenticated, new AddItemToOrderController().handle);
router.delete('/orders/remove', isAuthenticated, new RemoveItemFromOrderController().handle);
router.put('/orders/send', isAuthenticated, new SendOrderController().handle);
router.put('/orders/finish', isAuthenticated, new FinishOrderController().handle);

export { router };