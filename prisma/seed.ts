import bcrypt from 'bcrypt';
import prisma from '../src/db/client'; 
import { Prisma } from '@prisma/client';

async function main() {

  const hashedPassword = await bcrypt.hash('admin', 10);
  const secondHash = await bcrypt.hash('admin2', 10);

  const adminData: Prisma.AdminCreateInput[] = [
    {
      name: 'Kirill',
      login: 'TARANTAS',
      password: hashedPassword,
    },
    {
      name: 'Artem',
      login: 'LISIY_CHEREP',
      password: secondHash,
    },
  ];

  for (const ad of adminData) {
    await prisma.admin.upsert({
      where: { login: ad.login },
      update: {},
      create: ad,
    });
  }

  console.log('БД заполнена админами');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Ошибка при сидировании:', e);
    await prisma.$disconnect();
    process.exit(1);
  });