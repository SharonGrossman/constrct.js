import 'dotenv-extended/config';
import mongoose from 'mongoose';
import logger from 'env-bunyan';
import seed from './config/mongoose';
import socketConfig from './config/socket';
import createApp from './config/express';

export const app = createApp();

const mongoStarted = seed();

export let server;

const expressStarted = new Promise(resolve => {
  const { PORT } = process.env;

  server = app.listen(PORT, () => {
    logger.info(`Express listening on port ${PORT}`);
    resolve();
  });

  socketConfig(server);
});

export const started = Promise.all([mongoStarted, expressStarted]);

export const close = () => {
  server.close();
  mongoose.connection.close();
};
