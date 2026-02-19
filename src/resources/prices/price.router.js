import { Router } from 'express';
import priceController from './price.controller.js';

const router = Router();

router.get('/', priceController.getAll);

router.post('/:priceId', priceController.create);

router
  .route('/:priceId')
  .get(priceController.getById)
  .put(priceController.update)
  .delete(priceController.remove);

export default router;
