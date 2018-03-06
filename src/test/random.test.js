//write random 10 test cases
var expect = require('expect.js');
import log from '../config/log4js.config';
import ContactService from '../apis/contact/contactUs.service';

var contactService = new ContactService();

describe('testing', function() {
    describe('random test cases 1', function() {

        it('Get all contacts 1', function() {
            for (var i = 0; i < 10; i++) {
                return contactService.getAll((result) => {
                    log.info('i=' + i);
                    //log.info('all contact data: ' + JSON.stringify(result));
                });
            }
        });
        it('Get all contacts 2', function() {
            return contactService.getAll((result) => {
                //log.info('all contact data: ' + JSON.stringify(result));
            });
        });
        it('Get all contacts 3', function() {
            return contactService.getAll((result) => {
                //log.info('all contact data: ' + JSON.stringify(result));
            });
        });
        /*it('1st', function() {
            var a = 10;
            expect(a).to.equal(10);
        });
        it('2nd', function() {
            expect('2nd').to.equal('2nd');
        });
        it('3rd', function() {
            var d = 1;
            expect(d).to.be.greaterThan(0);
        });
        it('4th', function() {
            expect([]).to.be.empty;
        });
        it('5th', function() {
            expect(NaN).to.be.NaN;
        });
        it('6th', function() {
            expect(false, 'nooo why fail??').to.be.ok;
        });
        it('7th', function() {
            expect(undefined).to.be.undefined;
        });
        it('8th', function() {
            expect(true).to.be.true;
        });
        it('9th', function() {
            expect('foobar').to.equal('foobar');
        });
        it('10th', function() {
            expect({ a: 1 }).to.eql({ a: 1 });
        });
        it('11th', function() {
            expect('hello world!!').to.eql('hello world!!');
        });*/
    });

    describe('random test cases 2', function() {
        it('Get all contacts 21', function() {
            return contactService.getAll((result) => {
                //log.info('all contact data: ' + JSON.stringify(result));
            });
        });
        it('Get all contacts 22', function() {
            return contactService.getAll((result) => {
                //log.info('all contact data: ' + JSON.stringify(result));
            });
        });
        it('Get all contacts23', function() {
            return contactService.getAll((result) => {
                //log.info('all contact data: ' + JSON.stringify(result));
            });
        });
    });

    describe('random test cases 3', function() {
        it('Get all contacts 31', function() {
            return contactService.getAll((result) => {
                //log.info('all contact data: ' + JSON.stringify(result));
            });
        });
        it('Get all contacts 32', function() {
            return contactService.getAll((result) => {
                //log.info('all contact data: ' + JSON.stringify(result));
            });
        });
        it('Get all contacts 33', function() {
            return contactService.getAll((result) => {
                //log.info('all contact data: ' + JSON.stringify(result));
            });
        });
    });
    /*
        describe('random test cases', function() {
            it('1st', function() {
                var a = 10;
                expect(a).to.equal(10);
            });
            it('2nd', function() {
                expect('2nd').to.equal('2nd');
            });
            it('3rd', function() {
                var d = 1;
                expect(d).to.be.greaterThan(0);
            });
            it('4th', function() {
                expect([]).to.be.empty;
            });
            it('5th', function() {
                expect(NaN).to.be.NaN;
            });
            it('6th', function() {
                expect(false, 'nooo why fail??').to.be.ok;
            });
            it('7th', function() {
                expect(undefined).to.be.undefined;
            });
            it('8th', function() {
                expect(true).to.be.true;
            });
            it('9th', function() {
                expect('foobar').to.equal('foobar');
            });
            it('10th', function() {
                expect({ a: 1 }).to.eql({ a: 1 });
            });
            it('11th', function() {
                expect('hello world!!').to.eql('hello world!!');
            });
        });

        describe('random test cases', function() {
            it('1st', function() {
                var a = 10;
                expect(a).to.equal(10);
            });
            it('2nd', function() {
                expect('2nd').to.equal('2nd');
            });
            it('3rd', function() {
                var d = 1;
                expect(d).to.be.greaterThan(0);
            });
            it('4th', function() {
                expect([]).to.be.empty;
            });
            it('5th', function() {
                expect(NaN).to.be.NaN;
            });
            it('6th', function() {
                expect(false, 'nooo why fail??').to.be.ok;
            });
            it('7th', function() {
                expect(undefined).to.be.undefined;
            });
            it('8th', function() {
                expect(true).to.be.true;
            });
            it('9th', function() {
                expect('foobar').to.equal('foobar');
            });
            it('10th', function() {
                expect({ a: 1 }).to.eql({ a: 1 });
            });
            it('11th', function() {
                expect('hello world!!').to.eql('hello world!!');
            });
        });

        describe('random test cases', function() {
            it('1st', function() {
                var a = 10;
                expect(a).to.equal(10);
            });
            it('2nd', function() {
                expect('2nd').to.equal('2nd');
            });
            it('3rd', function() {
                var d = 1;
                expect(d).to.be.greaterThan(0);
            });
            it('4th', function() {
                expect([]).to.be.empty;
            });
            it('5th', function() {
                expect(NaN).to.be.NaN;
            });
            it('6th', function() {
                expect(false, 'nooo why fail??').to.be.ok;
            });
            it('7th', function() {
                expect(undefined).to.be.undefined;
            });
            it('8th', function() {
                expect(true).to.be.true;
            });
            it('9th', function() {
                expect('foobar').to.equal('foobar');
            });
            it('10th', function() {
                expect({ a: 1 }).to.eql({ a: 1 });
            });
            it('11th', function() {
                expect('hello world!!').to.eql('hello world!!');
            });
        });

        describe('random test cases', function() {
            it('1st', function() {
                var a = 10;
                expect(a).to.equal(10);
            });
            it('2nd', function() {
                expect('2nd').to.equal('2nd');
            });
            it('3rd', function() {
                var d = 1;
                expect(d).to.be.greaterThan(0);
            });
            it('4th', function() {
                expect([]).to.be.empty;
            });
            it('5th', function() {
                expect(NaN).to.be.NaN;
            });
            it('6th', function() {
                expect(false, 'nooo why fail??').to.be.ok;
            });
            it('7th', function() {
                expect(undefined).to.be.undefined;
            });
            it('8th', function() {
                expect(true).to.be.true;
            });
            it('9th', function() {
                expect('foobar').to.equal('foobar');
            });
            it('10th', function() {
                expect({ a: 1 }).to.eql({ a: 1 });
            });
            it('11th', function() {
                expect('hello world!!').to.eql('hello world!!');
            });
        });

        describe('random test cases', function() {
            it('1st', function() {
                var a = 10;
                expect(a).to.equal(10);
            });
            it('2nd', function() {
                expect('2nd').to.equal('2nd');
            });
            it('3rd', function() {
                var d = 1;
                expect(d).to.be.greaterThan(0);
            });
            it('4th', function() {
                expect([]).to.be.empty;
            });
            it('5th', function() {
                expect(NaN).to.be.NaN;
            });
            it('6th', function() {
                expect(false, 'nooo why fail??').to.be.ok;
            });
            it('7th', function() {
                expect(undefined).to.be.undefined;
            });
            it('8th', function() {
                expect(true).to.be.true;
            });
            it('9th', function() {
                expect('foobar').to.equal('foobar');
            });
            it('10th', function() {
                expect({ a: 1 }).to.eql({ a: 1 });
            });
            it('11th', function() {
                expect('hello world!!').to.eql('hello world!!');
            });
        });
    });

    describe('testing', function() {
        describe('random test cases', function() {
            it('1st', function() {
                var a = 10;
                expect(a).to.equal(10);
            });
            it('2nd', function() {
                expect('2nd').to.equal('2nd');
            });
            it('3rd', function() {
                var d = 1;
                expect(d).to.be.greaterThan(0);
            });
            it('4th', function() {
                expect([]).to.be.empty;
            });
            it('5th', function() {
                expect(NaN).to.be.NaN;
            });
            it('6th', function() {
                expect(false, 'nooo why fail??').to.be.ok;
            });
            it('7th', function() {
                expect(undefined).to.be.undefined;
            });
            it('8th', function() {
                expect(true).to.be.true;
            });
            it('9th', function() {
                expect('foobar').to.equal('foobar');
            });
            it('10th', function() {
                expect({ a: 1 }).to.eql({ a: 1 });
            });
            it('11th', function() {
                expect('hello world!!').to.eql('hello world!!');
            });
        });

        describe('random test cases', function() {
            it('1st', function() {
                var a = 10;
                expect(a).to.equal(10);
            });
            it('2nd', function() {
                expect('2nd').to.equal('2nd');
            });
            it('3rd', function() {
                var d = 1;
                expect(d).to.be.greaterThan(0);
            });
            it('4th', function() {
                expect([]).to.be.empty;
            });
            it('5th', function() {
                expect(NaN).to.be.NaN;
            });
            it('6th', function() {
                expect(false, 'nooo why fail??').to.be.ok;
            });
            it('7th', function() {
                expect(undefined).to.be.undefined;
            });
            it('8th', function() {
                expect(true).to.be.true;
            });
            it('9th', function() {
                expect('foobar').to.equal('foobar');
            });
            it('10th', function() {
                expect({ a: 1 }).to.eql({ a: 1 });
            });
            it('11th', function() {
                expect('hello world!!').to.eql('hello world!!');
            });
        });

        describe('random test cases', function() {
            it('1st', function() {
                var a = 10;
                expect(a).to.equal(10);
            });
            it('2nd', function() {
                expect('2nd').to.equal('2nd');
            });
            it('3rd', function() {
                var d = 1;
                expect(d).to.be.greaterThan(0);
            });
            it('4th', function() {
                expect([]).to.be.empty;
            });
            it('5th', function() {
                expect(NaN).to.be.NaN;
            });
            it('6th', function() {
                expect(false, 'nooo why fail??').to.be.ok;
            });
            it('7th', function() {
                expect(undefined).to.be.undefined;
            });
            it('8th', function() {
                expect(true).to.be.true;
            });
            it('9th', function() {
                expect('foobar').to.equal('foobar');
            });
            it('10th', function() {
                expect({ a: 1 }).to.eql({ a: 1 });
            });
            it('11th', function() {
                expect('hello world!!').to.eql('hello world!!');
            });
        });

        describe('random test cases', function() {
            it('1st', function() {
                var a = 10;
                expect(a).to.equal(10);
            });
            it('2nd', function() {
                expect('2nd').to.equal('2nd');
            });
            it('3rd', function() {
                var d = 1;
                expect(d).to.be.greaterThan(0);
            });
            it('4th', function() {
                expect([]).to.be.empty;
            });
            it('5th', function() {
                expect(NaN).to.be.NaN;
            });
            it('6th', function() {
                expect(false, 'nooo why fail??').to.be.ok;
            });
            it('7th', function() {
                expect(undefined).to.be.undefined;
            });
            it('8th', function() {
                expect(true).to.be.true;
            });
            it('9th', function() {
                expect('foobar').to.equal('foobar');
            });
            it('10th', function() {
                expect({ a: 1 }).to.eql({ a: 1 });
            });
            it('11th', function() {
                expect('hello world!!').to.eql('hello world!!');
            });
        });

        describe('random test cases', function() {
            it('1st', function() {
                var a = 10;
                expect(a).to.equal(10);
            });
            it('2nd', function() {
                expect('2nd').to.equal('2nd');
            });
            it('3rd', function() {
                var d = 1;
                expect(d).to.be.greaterThan(0);
            });
            it('4th', function() {
                expect([]).to.be.empty;
            });
            it('5th', function() {
                expect(NaN).to.be.NaN;
            });
            it('6th', function() {
                expect(false, 'nooo why fail??').to.be.ok;
            });
            it('7th', function() {
                expect(undefined).to.be.undefined;
            });
            it('8th', function() {
                expect(true).to.be.true;
            });
            it('9th', function() {
                expect('foobar').to.equal('foobar');
            });
            it('10th', function() {
                expect({ a: 1 }).to.eql({ a: 1 });
            });
            it('11th', function() {
                expect('hello world!!').to.eql('hello world!!');
            });
        });

        describe('random test cases', function() {
            it('1st', function() {
                var a = 10;
                expect(a).to.equal(10);
            });
            it('2nd', function() {
                expect('2nd').to.equal('2nd');
            });
            it('3rd', function() {
                var d = 1;
                expect(d).to.be.greaterThan(0);
            });
            it('4th', function() {
                expect([]).to.be.empty;
            });
            it('5th', function() {
                expect(NaN).to.be.NaN;
            });
            it('6th', function() {
                expect(false, 'nooo why fail??').to.be.ok;
            });
            it('7th', function() {
                expect(undefined).to.be.undefined;
            });
            it('8th', function() {
                expect(true).to.be.true;
            });
            it('9th', function() {
                expect('foobar').to.equal('foobar');
            });
            it('10th', function() {
                expect({ a: 1 }).to.eql({ a: 1 });
            });
            it('11th', function() {
                expect('hello world!!').to.eql('hello world!!');
            });
        });
        */
});