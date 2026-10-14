import { Router } from 'express';
import { getProductos, getProducto, createProducto, deleteProducto } from '../controllers/productoController.js';
//define las rutas para los productos y las asocia con los controladores correspondientes

const router = Router();

router.get('/', getProductos);
router.get('/:id', getProducto);
router.post('/', createProducto);
router.delete('/:id', deleteProducto);

export default router;