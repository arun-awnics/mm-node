import bcrypt from 'bcrypt';
import Dotenv from 'dotenv';
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");

import UserService from '../apis/user/user.service';

const dotenv = Dotenv.config({ path: '.env.dev' });
const userService = new UserService();
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function(email, password, done) {
        // call db to check if the user exists with tht correct password.
        return userService.findUserByEmail(email, password, (user, err) => {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect email' });
            } else {
                // comparing the password that is stored in database with the given password using bcrypt
                bcrypt.compare(password, user.password, function(err, res) {
                    if (err) {
                        // Passwords don't match
                        return done(null, false, { message: 'Incorrect password.' });
                    } else {
                        // Passwords match
                        return done(null, user, { message: 'Logged In Successfully' });
                    }
                });
            }
        });
    }
));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    },
    (jwtPayload, next) => {
        //1. check the token
        //    - if(true) call authorization
        //    - else throw 401 error
        if (!jwtPayload.data || !jwtPayload.data.role) {
            next(new Error("Permission denied."));
            return;
        }
        next(null, jwtPayload.data);
    }
));

module.exports = passport;