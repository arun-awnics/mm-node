import log from '../config/log4js.config';
import ContactService from '../apis/contact/contactUs.service';
var expect = require('expect.js');

var contactService = new ContactService();

describe('contactDao', function() {
    //this.timeout(10000);
    describe('#insert()', function() {
        it('creates a contact', function() {
            //this.timeout(200);
            var contact = {
                id: null,
                name: 'abc',
                regNo: "abc345",
                email: 'xyz@gmail.com',
                phoneNo: 8978567438,
                picUrl: 'nilu',
                description: 'SI',
                speciality: 'neurologist',
                experience: 2,
                status: 'active',
                waitingTime: 10,
                rating: 7
            };
            return contactService.create(contact, (res) => {
                //log.info('value after insert in contact: ' + JSON.stringify(res));
            }).then((result) => {
                expect(result.id).to.be.greaterThan(0);
                contactService.delete(result.id, (result) => {});
            });
        });
    });

    describe('#update()', function() {
        it('contact updated', function() {
            //this.timeout(300);
            var contact = {
                id: 22,
                name: 'nilu',
                regNo: "xyz345",
                email: 'xyz@gmail.com',
                phoneNo: 8978567438,
                picUrl: 'nilu',
                description: 'SI',
                speciality: 'neurologist',
                experience: 2,
                status: 'active',
                waitingTime: 10,
                rating: 7
            };
            return contactService.update(contact, (result) => {}).then((res) => {
                //contactService.delete(res.id, (res) => {});
            });
        });
    });

    describe('#readAll()', function() {
        it('Get all contacts', function() {
            //this.timeout(400);
            return contactService.getAll((result) => {
                    //log.info('all data: ' + JSON.stringify(result));
                })
                /*.then((result) => {
                                log.info('all data: ' + JSON.stringify(result));
                            })*/
            ;
        });
    });

    describe('#readById()', function() {
        it('Get contact by id', function() {
            //this.timeout(500);
            return contactService.getById(1, () => {}).then((res) => {
                //log.info('get by id data:' + JSON.stringify(res));
            });
        });
    });

    describe('#delete()', function() {
        it('Contact deleted', function(done) {
            //this.timeout(600);
            log.info('before delete');
            return contactService.delete(4, (result) => {}).then((res) => {
                log.info('inside delete');
            });
            log.info('after delete');
            done();
        });
        //done();
    });
});

/*import log from '../config/log4js.config';
import ContactService from '../apis/contact/contactUs.service';
import expect from 'expect.js';

var contactService = new ContactService();

describe('contactDao', function() {
    describe('#insert()', function() {
        it('creates a contact', function() {
            var contact = {
                name: 'santosh',
                picUrl: 'santosh',
                regNo: 'sa123',
                speciality: 'dental surgeon',
                experience: 2,
                description: 'dental problem',
                email: 'santosh@gmail.com',
                phoneNo: 7856745324,
                status: 'active',
                waitingTime: 10,
                rating: 5,
                videoUrl: 'video url',
                appearUrl: 'appear url',
                thumbnailUrl: 'thumbnail url',
                termsAccepted: true
            };
            contactService.create(contact, (result) => {
                log.info('data from test: ' + JSON.stringify(result));
                expect(result.id).to.be.greaterThan(0);
                expect(result.name).to.equal(contact.name);
                //contactService.delete(result.id, (result) => {});
            });
        });
    });

    describe('#update()', function() {
        it('contact updated', function() {
            var contact = {
                id: 1,
                name: 'abc',
                picUrl: 'santosh'
            };
            contactService.update(contact, (result) => {
                expect(result.name).to.equal(contact.name);
                //contactService.delete(contact.id, (result) => {});
            });
        });
    });

    describe('#readAll()', function() {
        it('Get all contacts', function() {
            contactService.getAll((result) => {});
        });
    });

    describe('#readById()', function() {
        it('Get contact by id', function() {
            var contact = {
                id: 1
            };
            contactService.getById(contact.id, (result) => {
                //log.info('Contact data for id ' + contact.id + ' is ' + JSON.stringify(result));
            });
        });
    });

    describe('#delete()', function() {
        it('Contact deleted', function() {
            var contact = {
                id: 1
            };
            contactService.delete(contact.id, (result) => {
                log.info('deleted contact: ' + JSON.stringify(result));
            });
        });
    });
});*/