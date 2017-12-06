import * as Config from '../config/app.config';
//var Config = require('../config/app.config');
//const userAPI = require('../apis/user/user.controller');
//var express = require('express');
var expect = require('expect.js');
var chai = require('chai');
let chaiHttp = require('chai-http');
var bodyParser = require('body-parser');
var UserDao = require('../apis/user/user.dao');
const log = require('../config/log4js.config');
var db = require('../apis/user');
var should = chai.should();
var user = {
    name: 'nisha',
    email: 'nisha@gmail.com',
    phoneNo: 8978567438,
    picUrl: 'nisha',
    description: 'SI',
    status: 'active',
    waitingTime: 10,
    rating: 7
};
//var app = express();
this.app = Config.app;

//var port = 4000;
//app.use('/userAPI', userAPI);

//app.listen(port);
chai.use(chaiHttp);

describe('userDao', function() {
    before(function() {
        db = require('../apis/user');
        return db.sequelize.sync({ force: true });
    });

    beforeEach(function() {
        this.User = db.User;
    });

    afterEach(function() {
        db.User.drop();
    });
    describe('create a user', function() {
        it('user created', (done) => {
            var user = {
                name: 'nisha',
                email: 'nisha@gmail.com',
                phoneNo: 8978567438,
                picUrl: 'nisha',
                description: 'SI',
                status: 'active',
                waitingTime: 10,
                rating: 7
            };
            chai.request(app)
                .post('/controllers/createdUser')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    /*describe('Create /user', () => {
        it('should be json', () => {
            return chai.request(app).get('/users')
                .then(res => {
                    expect(res.type).to.eql('application/json')
                })
        })
    })

    describe('#create()', function() {
        it('Returns the user model', function() {
            expect(db.User).to.be.ok();
        });

        xit('creates a user', function() {
            return db.sequelize.transaction({ autocommit: false }).then(function(t) {
                db.User.sync({ force: false }).then(function() {
                    return db.User.create(user, { transaction: t }).then(function(createdUser) {
                        log.info('after user created');
                        expect(createdUser.id).to.be.greaterThan(0);
                    }).then(function(result) {
                        log.info('result is:' + result);
                        return t.commit();
                    }).catch(function(error) {
                        log.error('error' + error);
                        return t.rollback();
                    });
                });
            });
        });

        xit('inserting the user using insert()', function() {
            return db.sequelize.transaction({ autocommit: false }).then(function(t) {
                log.info('after transaction');
                var userDao = new UserDao();
                userDao.insert(user, { transaction: t }).then(function(createdUser) {
                    log.info('after user created');
                    expect(createdUser.id).to.be.greaterThan(0);
                }).then(function(result) {
                    log.info('committed');
                    return t.commit();
                }).catch(function(err) {
                    return t.rollback();
                });
            });
        });

        it('creates a user', function() {
            var userDao = new UserDao();
            return userDao.insert(user).then(function(createdUser) {
                log.info('after user created');
                expect(createdUser.id).to.be.greaterThan(0);
            });
        });
    });*/
});