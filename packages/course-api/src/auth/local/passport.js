import passport from 'passport';
import { Strategy } from 'passport-local';
import mongoose from 'mongoose';
import { UserSchema } from 'models';

const User = mongoose.model('User', UserSchema);
const LocalStrategy = new Strategy({ usernameField: 'email' }, User.authenticate());

passport.use(LocalStrategy);
