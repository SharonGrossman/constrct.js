import pify from 'pify';
import { Schema } from 'mongoose';
import { single as emailAddress } from 'email-address';
import passportLocalMongoose from 'passport-local-mongoose';
import createSeed from 'mongoose-dependent-seed';
import seed from './user.seed';

const UserSchema = new Schema({
  name: {
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true
    }
  },
  email: {
    match: emailAddress,
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  admin: Boolean
});

/**
 * Virtuals
 */

UserSchema.virtual('name.full').get(function() {
  return `${this.name.first} ${this.name.last}`;
});

UserSchema.virtual('password').set(function(password) {
  this._password = password;
});

/**
 * Pre-save hook
 */
UserSchema.pre('save', function(next) {
  if (!this._password) {
    return next();
  }

  this.setPassword(this._password).then(() => next());
});

UserSchema.plugin(passportLocalMongoose, {
  usernameField: 'email'
});

UserSchema.methods.setPassword = pify(UserSchema.methods.setPassword);

export default createSeed('User', UserSchema, seed);
