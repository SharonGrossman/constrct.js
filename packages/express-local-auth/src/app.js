import 'dotenv-extended/config';
import { join } from 'path';
import express, { Router } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import compression from 'compression';
import { urlencoded, json } from 'body-parser';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import jsonErrorHandler from 'express-json-error-handler';
import inProduction from 'in-production';
import logger from 'env-bunyan';
import localRoute from './local';
import connect from './mongoose';

(async () => {
  const app = express();

  app.use(cors());
  app.use(helmet());
  app.use(urlencoded({ extended: false }));
  app.use(json());
  app.use(methodOverride());
  app.use(cookieParser());
  app.use(compression());

  app.use(compression());

  app.use('/', localRoute);

  app.use(
    jsonErrorHandler({
      log({ err, req, res }) {
        logger.error({ err, req, res });
      }
    })
  );

  const port = process.env.PORT || 9999;

  const expressStarted = async () => {
    const server = await app.listen(port);
  };

  await connect();
  await expressStarted();

  logger.info(`Express Local Auth Server listening on port ${port}`);
})();
