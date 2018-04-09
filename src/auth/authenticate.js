import Dotenv from 'dotenv';

const dotenv = Dotenv.config({ path: '.env.dev' });
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

/* POST login. */
router.post('/login', (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user: user
            });
        }
        req.login(user, { session: false }, (err) => {
            if (err) {
                res.send(err);
            }
            var expiry = new Date();
            expiry.setDate(expiry.getDate() + 7);
            // generate a signed web token with the contents of user object and return it in the response
            const token = jwt.sign({ data: user, exp: parseInt(expiry.getTime() / 1000) }, process.env.JWT_SECRET);
            return res.json({ user, token });
        });
    })(req, res);
});

module.exports = router;