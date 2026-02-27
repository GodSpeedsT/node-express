import 'dotenv/config';

const NODE_ENV = process.env.NODE_ENV ?String(process.env.NODE_ENV) : 'development';

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

export { PORT, NODE_ENV };
