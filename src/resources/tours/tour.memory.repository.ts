import { Tour } from '@prisma/client';
import prisma from '../../db/client';

const getAllTours = async (): Promise<Tour[]> => prisma.tour.findMany();

const getTourById = async (id: string): Promise<Tour | null> => prisma.tour.findUnique({
    where: { id },
  });
// const getByTourWithSchedule = async (tourId) => FAKE_TOUR_DB.filter((s) => s.productId);

const createTour = async (data: Omit<Tour, 'id'>) => prisma.tour.create({
    data,
  });
const updateTour = async (id: string, data: Partial<Tour>) => prisma.tour.update({
    where: { id },
    data,
  });

const removeTour = async (id: string): Promise<Tour | null> => prisma.tour.delete({
    where: { id },
  });

export default { getAllTours, getTourById, updateTour, createTour, removeTour };
