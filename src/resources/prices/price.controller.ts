import { Request, Response } from 'express';
import { Price } from '@prisma/client';
import priceService from './price.service';

const toResponse = (price: Price) => {
  const { id, scheduleId, priceValue, priceCurrency, createdAt, updatedAt } = price;
  return { id, scheduleId, priceValue, priceCurrency, createdAt, updatedAt };
};

const getAll = async (_req: Request, res: Response) => {
  const prices = await priceService.getAll();
  return res.json(prices.map(toResponse));
};

const getById = async (req: Request<{ priceId: string }>, res: Response) => {
  const { priceId } = req.params;
  const price = await priceService.getById(priceId);
  if (!price) {
    return res.status(404).json({ message: 'Price not found' });
  }
  return res.json(toResponse(price));
};

const create = async (req: Request, res: Response) => {
  const scheduleId = (req.body.scheduleId || req.query.scheduleId) as string;

  if (!scheduleId) {
    return res.status(400).json({ message: 'scheduleId is required' });
  }

  const newPrice = await priceService.create({ ...req.body, scheduleId });
  return res.status(201).json(toResponse(newPrice));
};

const update = async (req: Request<{ priceId: string }>, res: Response) => {
  const { priceId } = req.params;
  const updated = await priceService.update(priceId, req.body);
  if (!updated) {
    return res.status(404).json({ message: 'Price not found' });
  }
  return res.json(toResponse(updated));
};

const remove = async (req: Request<{ priceId: string }>, res: Response) => {
  const { priceId } = req.params;
  const deleted = await priceService.remove(priceId);
  if (!deleted) {
    return res.status(404).json({ message: 'Price not found' });
  }
  return res.status(204).send();
};

const getPricesIncorrect = async () => {
  throw new Error('Test Express Error');
};



export default { getAll, getById, create, update, remove, getPricesIncorrect };
