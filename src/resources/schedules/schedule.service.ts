import scheduleRepo from './schedule.memory.repository';
import priceService from '../prices/price.service';
import { Schedule } from './schedule.model';

const getAll = () => scheduleRepo.getAll();
const getById = (id: string) => scheduleRepo.getById(id);
const getByTourId = (tourId: string) => scheduleRepo.getByTourId(tourId);

const create = (scheduleData: Schedule) => scheduleRepo.create(scheduleData);

const update = (id: string, data: Schedule) => scheduleRepo.update(id, data);

const remove = async (id: string) => {
  await priceService.removeByScheduleId(id);

  return scheduleRepo.remove(id);
};

const getSchedulePrices = (scheduleId: string) => priceService.getByScheduleId(scheduleId);

export default { getAll, getById, getByTourId, create, update, remove, getSchedulePrices };
