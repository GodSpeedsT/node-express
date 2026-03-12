import bcrypt from 'bcrypt';
import { Prisma, Admin } from '@prisma/client';
import prisma from '../../db/client';

export const create = async (data: Prisma.AdminCreateInput): Promise<Admin> => {
  const rounds = 10;
  const hashedPassword = await bcrypt.hash(data.password, rounds);

  return prisma.admin.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  });
};

export const getByLogin = async (login: string): Promise<Admin | null> => prisma.admin.findUnique({
    where: { login },
  });

export const getById = async (id: string): Promise<Admin | null> => prisma.admin.findUnique({
    where: { id },
  });

export default { create, getByLogin, getById };