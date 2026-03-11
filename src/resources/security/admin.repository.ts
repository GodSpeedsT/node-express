import prisma from '../../db/client';
import bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';

export const create = async (data: Prisma.AdminCreateInput) => {
  const rounds = 10;
  const hashedPassword = await bcrypt.hash(data.password, rounds);

  return await prisma.admin.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  });
};

const adminRepo = {
create
}

export default adminRepo