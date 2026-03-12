download dependencies : npm i

generate entities: npx prisma generate

seed 2 admins: npx prisma db seed 

run project: docker-compose build and docker-compose up -d

check mistakes: npm run lint

check the authorize and other endpoints: 
For example: http://localhost:4000/login - get token

put token on 'Bearer token' mode in postman auth and use GET http://localhost:4000/tours


