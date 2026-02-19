const FAKE_PRICE_DB = [];

const getAll = async () => FAKE_PRICE_DB;
const getById = async (id) => FAKE_PRICE_DB.find((s) => s.id === id);

const getByScheduleId = async (scheduleId) =>
  FAKE_PRICE_DB.filter((p) => p.scheduleId === scheduleId);

const create = async (price) => {
  FAKE_PRICE_DB.push(price);
  return price;
};

const update = async (id, data) => {
  const index = FAKE_PRICE_DB.findIndex((p) => p.id === id);
  if (index !== -1) {
    FAKE_PRICE_DB[index] = { ...FAKE_PRICE_DB[index], ...data, updatedAt: new Date() };
    return FAKE_PRICE_DB[index];
  }
  return null;
};

const remove = async (id) => {
  const index = FAKE_PRICE_DB.findIndex((p) => p.id === id);
  if (index !== -1) {
    return FAKE_PRICE_DB.splice(index, 1)[0];
  }
  return null;
};

const removeByScheduleId = async (scheduleId) => {
  const toDelete = await getByScheduleId(scheduleId);
  toDelete.forEach((price) => {
    const index = FAKE_PRICE_DB.findIndex((p) => p.id === price.id);
    if (index !== -1) FAKE_PRICE_DB.splice(index, 1);
  });
};

export default { getAll, getById, getByScheduleId, create, update, remove, removeByScheduleId };
