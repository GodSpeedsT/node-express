import express from 'express';
import tourRouter from './resources/tours/tour.router.js';
import scheduleRouter from './resources/schedules/schedule.router.js';
import priceRouter from './resources/prices/price.router.js';

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/tours', tourRouter);
app.use('/schedules', scheduleRouter);
app.use('/prices', priceRouter);
app.use((req, res) => {
  res.status(500).send('Something broke!');
});

export default app;