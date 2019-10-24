import passport from 'passport';
import { Strategy } from 'passport-local';
import User from '../user/user.model';

const LocalStrategy = new Strategy({ usernameField: 'email' }, User.authenticate());

passport.use(LocalStrategy);
