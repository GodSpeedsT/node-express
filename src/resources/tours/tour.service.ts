import tourRepo from './tour.memory.repository';
import scheduleService from '../schedules/schedule.service';
import { Tour } from './tour.model';

const getAll = () => tourRepo.getAllTours();
const getById = (id: string) => tourRepo.getTourById(id);
const create = (tour: Tour) => tourRepo.createTour(tour);
const update = (id: string, data: Tour) => tourRepo.updateTour(id, data);

const remove = async (id: string) => {
  await scheduleService.remove(id);

  return tourRepo.removeTour(id);
};

const getTourSchedules = (tourId: string) => scheduleService.getByTourId(tourId);

export default { getAll, getById, create, update, remove, getTourSchedules };
