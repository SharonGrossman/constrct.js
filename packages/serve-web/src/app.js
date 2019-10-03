import 'dotenv-extended/config';
import { join } from 'path';
import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import { urlencoded, json } from 'body-parser';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import staticGzip from 'express-static-gzip';
import jsonErrorHandler from 'express-json-error-handler';
import inProduction from 'in-production';
import logger from 'env-bunyan';

export default async ({ dirname }) => {
  const app = express();

  app.use(helmet());
  app.use(urlencoded({ extended: false }));
  app.use(json());
  app.use(methodOverride());
  app.use(cookieParser());

  app.use(staticGzip(join(dirname, 'dist')));
  app.use(express.static(join(dirname, 'dist')));

  app.use(compression());

  app.route('/*').get((req, res) => res.sendFile(join(dirname, 'dist', 'index.html')));

  app.use(
    jsonErrorHandler({
      log({ err, req, res }) {
        logger.error({ err, req, res });
      }
    })
  );

  const port = process.env.HOST_PORT || 9999;

  const expressStarted = async () => {
    const server = await app.listen(port);
  };

  await expressStarted();
  logger.info(`Express listening on port ${port}`);
};
