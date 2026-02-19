const FAKE_TOUR_DB = [];

const getAllTours = async () => FAKE_TOUR_DB;
const getTourById = async (id) => FAKE_TOUR_DB.find((s) => s.id === id);
// const getByTourWithSchedule = async (tourId) => FAKE_TOUR_DB.filter((s) => s.productId);

const createTour = async (tour) => {
  FAKE_TOUR_DB.push(tour);
  return tour;
};

const updateTour = async (id, data) => {
  const index = FAKE_TOUR_DB.findIndex((tour) => tour.id === id);
  if (index !== -1) {
    FAKE_TOUR_DB[index] = {
      ...FAKE_TOUR_DB[index],
      ...data,
      updatedAt: new Date(),
    };
    return null;
  } 
};

const removeTour = async (id) => {
  const index = FAKE_TOUR_DB.findIndex((s) => s.id === id);
  if (index !== -1) {
    const deleted = FAKE_TOUR_DB.splice(index, 1);
    return deleted[0];
  }
  return null;
};

export default { getAllTours, getTourById, updateTour, createTour, removeTour };
