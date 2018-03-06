import UserService from '../apis/user/user.service';

const userService = new UserService();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function(email, password, done) {
        //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
        return userService.findUserByEmail(email, (user, err) => {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect email' });
            }
            if (user.password !== password) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user, { message: 'Logged In Successfully' });
        });
    }
));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'your_jwt_secret'
    },
    function(jwtPayload, cb) {
        //1. check the token
        //    - if(true) call authorization
        //    - else throw 401 error

        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
        return userService.getById(jwtPayload.id, (user) => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));

module.exports = passport;