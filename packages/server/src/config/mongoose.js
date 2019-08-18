import mongoose from 'mongoose';
import logger from 'env-bunyan';
import { seed } from 'mongoose-plugin-seed';

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

export default async () => {
  if (process.env.SEED_DB !== 'true') {
    return;
  }

  try {
    await seed();

    logger.info('Finished populating database.');
  } catch (error) {
    logger.error({ error }, 'Unable to populate database');
  }
};
