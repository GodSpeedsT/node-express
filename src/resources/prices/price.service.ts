import priceRepo from './price.memory.repository';
import { Price } from './price.model';

const getAll = async () => priceRepo.getAll();
const getById = async (id: string) => priceRepo.getById(id);
const getByScheduleId = async (scheduleId: string) => priceRepo.getByScheduleId(scheduleId);
const create = async (price: Price) => priceRepo.create(price);
const update = async (id: string, data: Price) => priceRepo.update(id, data);
const remove = async (id: string) => priceRepo.remove(id);
const removeByScheduleId = async (scheduleId: string) => priceRepo.removeByScheduleId(scheduleId);

export default { getAll, getById, getByScheduleId, create, update, remove, removeByScheduleId };
