import { UserSchema } from 'models';
import createSeed from 'mongoose-dependent-seed';
import seed from './user.seed';

export default createSeed('User', UserSchema, seed);
