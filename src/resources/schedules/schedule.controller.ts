import { Request, Response } from 'express';
import scheduleService from './schedule.service';
import { Schedule } from './schedule.model';

const getAll = async (_req: Request, res: Response) => {
  const schedules = await scheduleService.getAll();
  return res.json(schedules.map(Schedule.toResponse));
};

const getById = async (req: Request<{ scheduleId: string }>, res: Response) => {
  const { scheduleId } = req.params;
  const schedule = await scheduleService.getById(scheduleId);
  if (!schedule) return res.status(404).send('Schedule not found');
  return res.json(Schedule.toResponse(schedule));
};

const create = async (req: Request, res: Response) => {
  const productId = req.body.productId || req.query.productId;

  if (!productId) {
    return res.status(400).json({ error: 'productId is required' });
  }
  const schedule = await scheduleService.create(new Schedule({ ...req.body, productId }));
  return res.status(201).json(Schedule.toResponse(schedule));
};

const update = async (req: Request<{ scheduleId: string }>, res: Response) => {
  const { scheduleId } = req.params;
  const schedule = await scheduleService.update(scheduleId, req.body);
  if (!schedule) return res.status(404).send('Schedule not found');
  return res.json(Schedule.toResponse(schedule));
};

const remove = async (req: Request<{ scheduleId: string }>, res: Response) => {
  const { scheduleId } = req.params;
  const schedule = await scheduleService.remove(scheduleId);
  if (!schedule) return res.status(404).send('Schedule not found');
  return res.status(204).send('Schedule deleted');
};

const getPrices = async (req: Request<{ scheduleId: string }>, res: Response) => {
  const { scheduleId } = req.params;
  const prices = await scheduleService.getSchedulePrices(scheduleId);
  return res.json(prices);
};

export default { create, getPrices, getAll, getById, update, remove };
