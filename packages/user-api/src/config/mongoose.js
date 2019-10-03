import mongoose from 'mongoose';
import logger from 'env-bunyan';
import { seed } from 'mongoose-dependent-seed';

export default async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    });

    logger.info('Connected to MongoDB');
  } catch (error) {
    logger.error('Failed connecting to MongoDB');
  }

  if (process.env.SEED_DB !== 'true') {
    return;
  }

  try {
    await seed();

    logger.info('Finished populating database.');
  } catch (error) {
    logger.error({ error }, 'Unable to populate database');
  }

  mongoose.connection.on('error', err => {
    logger.info(err);
  });
};
