import priceService from './price.service.js';
import { Price } from './price.model.js';

const getAll = async (req, res) => {
  const prices = await priceService.getAll();
  res.json(prices.map(Price.toResponse));
};

const getById = async (req, res) => {
  const price = await priceService.getById(req.params.priceId);
  if (!price) return res.status(404).json({ message: 'Price not found' });
  res.json(Price.toResponse(price));
};

const create = async (req, res) => {
  const scheduleId = req.body.scheduleId || req.query.scheduleId;

  if (!scheduleId) {
    return res.status(400).json({ message: 'scheduleId is required' });
  }

  const newPrice = await priceService.create(new Price({ ...req.body, scheduleId }));
  res.status(201).json(Price.toResponse(newPrice));
};

const update = async (req, res) => {
  const updated = await priceService.update(req.params.priceId, req.body);
  if (!updated) return res.status(404).json({ message: 'Price not found' });
  res.json(Price.toResponse(updated));
};

const remove = async (req, res) => {
  const deleted = await priceService.remove(req.params.priceId);
  if (!deleted) return res.status(404).json({ message: 'Price not found' });
  res.status(204).send(); 
};

export default { getAll, getById, create, update, remove };
