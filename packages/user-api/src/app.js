import 'dotenv-extended/config';
import logger from 'env-bunyan';
import connect from './config/mongoose';
import socketConfig from './config/socket';
import create from './config/express';

(async () => {
  const app = create();
  const { PORT } = process.env;

  const expressStarted = async () => {
    const server = await app.listen(PORT);

    socketConfig(server);
  };

  await connect();
  await expressStarted();

  logger.info(`Express listening on port ${PORT}`);
})();
