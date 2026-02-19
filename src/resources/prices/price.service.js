import priceRepo from './price.memory.repository.js';

const getAll = () => priceRepo.getAll();
const getById = (id) => priceRepo.getById(id);
const getByScheduleId = (scheduleId) => priceRepo.getByScheduleId(scheduleId);
const create = (price) => priceRepo.create(price);
const update = (id, data) => priceRepo.update(id, data);
const remove = (id) => priceRepo.remove(id);

const removeByScheduleId = (scheduleId) => priceRepo.removeByScheduleId(scheduleId);

export default { getAll, getById, getByScheduleId, create, update, remove, removeByScheduleId };
