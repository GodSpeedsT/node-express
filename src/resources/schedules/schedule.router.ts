import { Router } from 'express';
import scheduleController from './schedule.controller';

const router = Router();

router.route('/').get(scheduleController.getAll).post(scheduleController.create);

router
  .route('/:scheduleId')
  .get(scheduleController.getById)
  .put(scheduleController.update)
  .delete(scheduleController.remove);

router.get('/:scheduleId/prices', scheduleController.getPrices);

export default router;
