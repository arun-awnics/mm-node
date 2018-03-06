/**
 * import dependencies
 */
import express from 'express';
import session from 'express-session';
import flash from 'express-flash';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import lodash from 'lodash';
import http from 'http';
import socket from 'socket.io';

/**
 * import required files
 */
import MongoConfig from '../util/conn.mongo';
import MySql from '../util/conn.mysql';
import socketService from '../apis/sockets/socket.service';
import log from './log4js.config';
import doctor from '../apis/doctor/doctor.controller';
import fileUpload from '../apis/file-upload/file-upload.controller';
import message from '../apis/message/message.controller';
import swaggerSpec from './swagger.config';
import user from '../apis/user/user.controller';
import contactUs from '../apis/contact/contactUs.controller';
import group from '../apis/group/group.controller';
import orderRequest from '../apis/orderRequest/orderRequest.controller';
import specialities from '../apis/specialities/specialities.controller';
import passport from '../auth/passport';
import authenticate from '../auth/authenticate';
import role from '../apis/role/role.controller';

class Config {
    constructor() {
        this.app = express();
        this.session = session;
        this.flash = flash;
        this.socket = socket;
        this.http = http.Server(this.app);
        this.io = this.socket.listen(this.http);
        this.dotenv = dotenv;
        this.lodash = lodash;
        this.dotenv.config({ path: '.env.dev' });
        this.mongo = new MongoConfig();
    }

    configureApp() {
        // set port to use
        this.app.set('port', (process.env.PORT));
        // use body parser as middleware
        this.app.use(bodyParser.json());
        // use urlEncoder as middleware
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // connect mongo server
        this.mongo.connect();
        // pass io object to establish socket connection
        socketService.connectSocket(this.io);
    }

    configureCORS() {
        // Additional middleware which will set headers that we need on each request.
        this.app.use((req, res, next) => {
            // Set permissive CORS header - this allows this server to be used only as
            // an API server in conjunction with something like webpack-dev-server.
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

            // Disable caching so we'll always get the latest userDetails.
            res.setHeader('Cache-Control', 'no-cache');
            next();
        });
    }

    configureRoutes() {
        // configuring routes
        this.app.use('/auth', authenticate);
        this.app.use('/doctor', doctor);
        this.app.use('/file', fileUpload);
        this.app.use('/message', passport.authenticate('jwt', { session: false }), message);
        this.app.use('/user', user);
        this.app.use('/contact', contactUs);
        this.app.use('/group', group);
        this.app.use('/specialities', specialities);
        this.app.use('/orderRequest', orderRequest);
        this.app.use('/role', role);
        this.app.get('/swagger.json', (req, res) => {
            res.setHeader('Content-Type', 'application/json');
            res.send(swaggerSpec);
        });
    }

    listen(port) {
        // start server at port
        this.http.listen(port, () => {
            log.info(`Server started: http://localhost:${port}/`);
        });
    }

    run() {
        // start application
        this.configureApp();
        this.configureCORS()
        this.configureRoutes();
        this.listen(this.app.get('port'));
    }
}

export default Config;