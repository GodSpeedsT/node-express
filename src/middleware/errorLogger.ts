import { Request, Response} from 'express';
import logger from '../exteption-handler/winston';

export const errorLogger = (err: Error, _req: Request, res: Response) => {
  logger.error(`Error: ${err.message}`, { stack: err.stack });

  res.status(500).json({ message: 'Internal server err' });
};
