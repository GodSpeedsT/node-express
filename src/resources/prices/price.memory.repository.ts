import { Price } from './price.model';

const FAKE_PRICE_DB: Price[] = [];

const getAll = async (): Promise<Price[]> => FAKE_PRICE_DB;

const getById = async (id: string): Promise<Price | undefined> =>
  FAKE_PRICE_DB.find((s) => s.id === id);

const getByScheduleId = async (scheduleId: string): Promise<Price[]> =>
  FAKE_PRICE_DB.filter((p) => p.scheduleId === scheduleId);

const create = async (price: Price): Promise<Price> => {
  FAKE_PRICE_DB.push(price);
  return price;
};

const update = async (id: string, data: Price): Promise<Price | null> => {
  const index = FAKE_PRICE_DB.findIndex((p) => p.id === id);
  if (index !== -1) {
    FAKE_PRICE_DB[index] = { ...FAKE_PRICE_DB[index], ...data, updatedAt: new Date() };
    return FAKE_PRICE_DB[index];
  }
  return null;
};

const remove = async (id: string): Promise<Price | null> => {
  const index = FAKE_PRICE_DB.findIndex((p) => p.id === id);
  if (index !== -1) {
    const [deletedPrice] = FAKE_PRICE_DB.splice(index, 1);
    return deletedPrice || null;
  }
  return null;
};

const removeByScheduleId = async (scheduleId: string): Promise<void> => {
  const toDelete = FAKE_PRICE_DB.filter((k) => k.scheduleId !== scheduleId);
  FAKE_PRICE_DB.length = 0;
  FAKE_PRICE_DB.push(...toDelete);
};

export default { getAll, getById, getByScheduleId, create, update, remove, removeByScheduleId };
