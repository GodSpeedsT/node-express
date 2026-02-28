import app from './app';
import { PORT } from './common/config';
import logger from './exteption-handler/winston';

process.on('uncaughtException', (error: Error) => {
    logger.error(`Uncaught exception: ${error.message}`, {stack: error.stack});
});

setTimeout(() => {
  throw new Error('CRITICAL SYSTEM FAILURE');
}, 1000);

process.on('unhandledRejection', (reason: any) => {
  logger.error(`Unhandled Rejection: ${reason.message || reason}`);
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`App is running on localhost:${PORT}`));
