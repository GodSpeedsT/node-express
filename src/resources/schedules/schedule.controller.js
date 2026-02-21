import scheduleService from './schedule.service.js';
import { Schedule } from './schedule.model.js';

const getAll = async (req, res) => {
  const schedules = await scheduleService.getAll();
  return res.json(schedules.map(Schedule.toResponse));
};

const getById = async (req, res) => {
  const schedule = await scheduleService.getById(req.params.scheduleId);
  if (!schedule) return res.status(404).send('Schedule not found');
  return res.json(Schedule.toResponse(schedule));
};

const create = async (req, res) => {
  const productId = req.body.productId || req.query.productId;

  if (!productId) {
    return res.status(400).json({ error: 'productId is required' });
  }
  const schedule = await scheduleService.create(new Schedule({ ...req.body, productId }));
  return res.status(201).json(Schedule.toResponse(schedule));
};

const update = async (req, res) => {
  const schedule = await scheduleService.update(req.params.scheduleId, req.body);
  if (!schedule) return res.status(404).send('Schedule not found');
  return res.json(Schedule.toResponse(schedule));
};

const remove = async (req, res) => {
  const schedule = await scheduleService.remove(req.params.scheduleId);
  if (!schedule) return res.status(404).send('Schedule not found');
  return res.status(204).send('Schedule deleted');
};

const getPrices = async (req, res) => {
  const prices = await scheduleService.getSchedulePrices(req.params.scheduleId);
  return res.json(prices);
};

export default { create, getPrices, getAll, getById, update, remove };
