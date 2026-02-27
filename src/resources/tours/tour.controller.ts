import { Request, Response } from 'express';
import tourService from './tour.service';
import { Tour } from './tour.model';

const getAll = async (_req: Request, res: Response) => {
  const tours = await tourService.getAll();
  return res.json(tours.map(Tour.toResponse));
};

const getById = async (req: Request<{ tourId: string }>, res: Response) => {
  const { tourId } = req.params;
  const tour = await tourService.getById(tourId);
  if (!tour) return res.status(404).send('Tour not found');
  return res.json(Tour.toResponse(tour));
};

const getSchedules = async (req: Request<{ tourId: string }>, res: Response) => {
  const { tourId } = req.params;
  const schedules = await tourService.getTourSchedules(tourId);
  return res.json(schedules);
};

const create = async (req: Request, res: Response) => {
  const tour = await tourService.create(new Tour(req.body));
  return res.status(201).json(Tour.toResponse(tour));
};

const update = async (req: Request<{ tourId: string }>, res: Response) => {
  const { tourId } = req.params;
  const tour = await tourService.update(tourId, req.body);
  if (!tour) return res.status(404).send('Tour not found');
  return res.json(Tour.toResponse(tour));
};

const remove = async (req: Request<{ tourId: string }>, res: Response) => {
  const { tourId } = req.params;
  const tour = await tourService.remove(tourId);
  if (!tour) return res.status(404).send('Tour not found');
  return res.status(204).send('Tour deleted');
};

export default { getAll, getById, getSchedules, create, update, remove };
