import { Router } from 'express';
import tourController from './tour.controller';

const router = Router();

router.get('/', tourController.getAll);
router.post('/', tourController.create);

router.get('/:tourId', tourController.getById);
router.put('/:tourId', tourController.update);
router.delete('/:tourId', tourController.remove);

router.get('/:tourId/schedules', tourController.getSchedules);

export default router;