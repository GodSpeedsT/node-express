import tourService from './tour.service.js';
import { Tour } from './tour.model.js';

const getAll = async (req, res) => {
  const tours = await tourService.getAll();
  return res.json(tours.map(Tour.toResponse));
};

const getById = async (req, res) => {
  const tour = await tourService.getById(req.params.tourId);
  if (!tour) return res.status(404).send('Tour not found');
  return res.json(Tour.toResponse(tour));
};

const getSchedules = async (req, res) => {
  const schedules = await tourService.getTourSchedules(req.params.tourId);
  return res.json(schedules);
};

const create = async (req, res) => {
  const tour = await tourService.create(new Tour(req.body));
  return res.status(201).json(Tour.toResponse(tour));
};

const update = async (req, res) => {
  const tour = await tourService.update(req.params.tourId, req.body);
  if (!tour) return res.status(404).send('Tour not found');
  return res.json(Tour.toResponse(tour));
};

const remove = async (req, res) => {
  const tour = await tourService.remove(req.params.tourId);
  if (!tour) return res.status(404).send('Tour not found');
  return res.status(204).send('Tour deleted');
};

export default { getAll, getById, getSchedules, create, update, remove };
