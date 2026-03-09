import { Schedule } from '@prisma/client';
import prisma from '../../db/client';

const getAll = async (): Promise<Schedule[]> => prisma.schedule.findMany();

const getById = async (id: string): Promise<Schedule | null> => prisma.schedule.findUnique({
    where: { id },
    include: { prices: true },
  });

const getByTourId = async (tourId: string): Promise<Schedule[]> => prisma.schedule.findMany({
    where: { tourId },
  });

const create = async (data: Omit<Schedule, 'id' | 'createdAt' | 'updatedAt'>) => prisma.schedule.create({
    data,
  });

const update = async (id: string, data: Partial<Schedule>) => prisma.schedule.update({
    where: { id },
    data: {
      ...data,
      updatedAt: new Date(),
    },
  });

const remove = async (id: string) => prisma.schedule.delete({
    where: { id },
  });

const removeByTourId = async (tourId: string) => prisma.schedule.deleteMany({
    where: { tourId },
  });

export default { getAll, getById, getByTourId, create, update, remove, removeByTourId };
