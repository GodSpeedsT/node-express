import { Request, Response } from 'express';
import { Tour } from '@prisma/client';
import tourService from './tour.service';

const toResponse = (tour: Tour) => {
  const { id, title, slug, description, isAlive } = tour;
  return { id, title, slug, description, isAlive };
};

const getAll = async (_req: Request, res: Response) => {
  const tours = await tourService.getAll();
  return res.json(tours.map(toResponse));
};

const getById = async (req: Request<{ tourId: string }>, res: Response) => {
  const { tourId } = req.params;
  const tour = await tourService.getById(tourId);
  if (!tour) return res.status(404).send('Tour not found');
  return res.json(toResponse(tour));
};

const getSchedules = async (req: Request<{ tourId: string }>, res: Response) => {
  const { tourId } = req.params;
  const schedules = await tourService.getTourSchedules(tourId);
  return res.json(schedules);
};

const create = async (req: Request, res: Response) => {
  const tour = await tourService.create({ ...req.body });
  return res.status(201).json(toResponse(tour));
};

const update = async (req: Request<{ tourId: string }>, res: Response) => {
  const { tourId } = req.params;
  const tour = await tourService.update(tourId, req.body);
  if (!tour) return res.status(404).send('Tour not found');
  return res.json(toResponse(tour));
};

const remove = async (req: Request<{ tourId: string }>, res: Response) => {
  const { tourId } = req.params;
  const tour = await tourService.remove(tourId);
  if (!tour) return res.status(404).send('Tour not found');
  return res.status(204).send('Tour deleted');
};



export default { getAll, getById, getSchedules, create, update, remove };
