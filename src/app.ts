import express from 'express';
import tourRouter from './resources/tours/tour.router';
import scheduleRouter from './resources/schedules/schedule.router';
import priceRouter from './resources/prices/price.router';
import {errorLogger} from './middleware/errorLogger';
import {requestLogger} from './middleware/requestLogger';
import * as securityMiddleware from "./middleware/security.middleware";
import securityController from './resources/security/security.controller';
import adminRouter from './resources/security/admin.router';

const app = express();

app.use(express.json());
app.use(requestLogger);

app.post('/login',securityController.login);
app.use('/users',adminRouter);

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use(securityMiddleware.authMiddleware);



app.use('/tours', tourRouter);
app.use('/schedules', scheduleRouter);
app.use('/prices', priceRouter);
app.use((_req, res) => {
  res.status(500).send('Something broke!');
});

app.use(errorLogger);

export default app;