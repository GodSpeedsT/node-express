import tourRepo from './tour.memory.repository.js';
import scheduleService from '../schedules/schedule.service.js';

const getAll = () => tourRepo.getAllTours();
const getById = (id) => tourRepo.getTourById(id);
const create = (tour) => tourRepo.createTour(tour);
const update = (id, data) => tourRepo.updateTour(id, data);

const remove = async (id) => {
  await scheduleService.remove(id);

  return tourRepo.removeTour(id);
};

const getTourSchedules = (tourId) => scheduleService.getByTourId(tourId);

export default { getAll, getById, create, update, remove, getTourSchedules };
