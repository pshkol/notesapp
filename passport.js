const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  await User.findOne({email: email})
    .then(async (e) => {
      return {
        password: await bcrypt.compare(password, e.password),
        user: e
      }
    })
    .then((e) => {
      if (e.password === false) {
        done(null, false);
      } else {
        console.log(e)
        done(null, e)
      }
    })
    .catch((e) => {
      done(null, false)
    })
}))

passport.serializeUser((e, done) => {
  done(null, e.user._id);
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(null, user);
  })
})
