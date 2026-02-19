import scheduleRepo from './schedule.memory.repository.js';
import priceService from '../prices/price.service.js';

const getAll = () => scheduleRepo.getAll();
const getById = (id) => scheduleRepo.getById(id);
const getByTourId = (tourId) => scheduleRepo.getByTourId(tourId);

const create = (scheduleData) => scheduleRepo.create(scheduleData);

const update = (id, data) => scheduleRepo.update(id, data);

const remove = async (id) => {
  await priceService.removeByScheduleId(id);

  return scheduleRepo.remove(id);
};

const getSchedulePrices = (scheduleId) => priceService.getByScheduleId(scheduleId);

export default { getAll, getById, getByTourId, create, update, remove, getSchedulePrices };
