import express from 'express';
import tourRouter from './resources/tours/tour.router';
import scheduleRouter from './resources/schedules/schedule.router';
import priceRouter from './resources/prices/price.router';
import {errorLogger} from './middleware/errorLogger';
import {requestLogger} from './middleware/requestLogger';


const app = express();
app.use(express.json());

app.use(requestLogger);

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
app.use((_req, res) => {
  res.status(500).send('Something broke!');
});

app.use(errorLogger);

export default app;