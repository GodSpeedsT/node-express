const FAKE_DB = [];

const getAll = async () => FAKE_DB;
const getById = async (id) => FAKE_DB.find((s) => s.id === id);
const getByTourId = async (tourId) => FAKE_DB.filter((s) => s.productId === tourId);

const create = async (schedule) => {
  FAKE_DB.push(schedule);
  return schedule;
};

const update = async (id, data) => {
  const index = FAKE_DB.findIndex((s) => s.id === id);
  if (index !== -1) {
    FAKE_DB[index] = { ...FAKE_DB[index], ...data, updatedAt: new Date() };
    return FAKE_DB[index];
  }
  return null;
};

const remove = async (id) => {
  const index = FAKE_DB.findIndex((s) => s.id === id);
  if (index !== -1) {
    return FAKE_DB.splice(index, 1)[0];
  }
  return null;
};

const removeByTourId = async (tourId) => {
  const toDelete = await getByTourId(tourId);
  for (const schedule of toDelete) {
    await remove(schedule.id);
  }
};

export default { getAll, getById, getByTourId, create, update, remove, removeByTourId };
