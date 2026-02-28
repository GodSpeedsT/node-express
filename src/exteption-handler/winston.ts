import winston from 'winston';

const root = process.cwd();
console.log(root);
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ 
      filename: `${root}/src/logs/error.log`, 
      level: 'error' 
    }),
    new winston.transports.File({ 
      filename: `${root}/src/logs/app.log` 
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    ),
  }));
}

export default logger;