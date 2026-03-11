import { Price } from '@prisma/client';
import prisma from '../../db/client';

const getAll = async (): Promise<Price[]> => prisma.price.findMany();

const getById = async (id: string): Promise<Price | null> => prisma.price.findUnique({
    where: { id },
    include: { schedule: true },
  });

const getByScheduleId = async (scheduleId: string): Promise<Price[]> => prisma.price.findMany({
    where: { scheduleId },
  });

const create = async (data: Omit<Price, 'id' | 'createdAt' | 'updatedAt'>): Promise<Price> => prisma.price.create({
    data,
  });

const update = async (id: string, data: Partial<Price>): Promise<Price | null> => prisma.price.update({
    where: { id },
    data,
  });

const remove = async (id: string): Promise<Price | null> =>  prisma.price.delete({
    where: { id },
  });

const removeByScheduleId = async (scheduleId: string) => prisma.price.deleteMany({
    where: { scheduleId },
  });

export default { getAll, getById, getByScheduleId, create, update, remove, removeByScheduleId };
