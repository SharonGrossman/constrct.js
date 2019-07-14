import passport from 'passport';
import User from '../../api/user/user.model';
import { Strategy } from 'passport-local';

const LocalStrategy = new Strategy({ usernameField: 'email' }, User.authenticate());

passport.use(LocalStrategy);
