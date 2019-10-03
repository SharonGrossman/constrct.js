import passport from 'passport';
import mongoose from 'mongoose';
import { Strategy } from 'passport-local';
import { UserSchema } from 'models';

const User = mongoose.model('User', UserSchema);

const LocalStrategy = new Strategy({ usernameField: 'email' }, User.authenticate());

passport.use(LocalStrategy);
