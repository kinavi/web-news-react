const passport = require('passport');
const LocalStrategy = require('passport-local');

import {Users} from './mongoose/index';

passport.use(new LocalStrategy({
  usernameField: 'user[login]',
  passwordField: 'user[password]',
}, (login, password, done) => {
  Users.findOne({login})
      .then((user) => {
        console.log('user 111 - ', user);
        if (!user || !user.validatePassword(password)) {
          return done(null, false, {errors: {'email or password': 'is invalid'}});
        }

        return done(null, user);
      }).catch(done);
}));
