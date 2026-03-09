import { Request, Response } from 'express';
import { Schedule } from '@prisma/client';
import scheduleService from './schedule.service';

const toResponse = (schedule: Schedule) => {
  const { id, tourId, isActive, startDate, endDate } = schedule;
  return { id, tourId, isActive, startDate, endDate };
};

const getAll = async (_req: Request, res: Response) => {
  const schedules = await scheduleService.getAll();
  return res.json(schedules.map(toResponse));
};

const getById = async (req: Request<{ scheduleId: string }>, res: Response) => {
  const { scheduleId } = req.params;
  const schedule = await scheduleService.getById(scheduleId);
  if (!schedule) return res.status(404).send('Schedule not found');
  return res.json(toResponse(schedule));
};

const create = async (req: Request, res: Response) => {
  const tourId = req.body.tourId || req.query.tourId;

  if (!tourId) {
    return res.status(400).json({ error: 'productId is required' });
  }
  const schedule = await scheduleService.create({ ...req.body, tourId });
  return res.status(201).json(toResponse(schedule));
};

const update = async (req: Request<{ scheduleId: string }>, res: Response) => {
  const { scheduleId } = req.params;
  const schedule = await scheduleService.update(scheduleId, req.body);
  if (!schedule) return res.status(404).send('Schedule not found');
  return res.json(toResponse(schedule));
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
