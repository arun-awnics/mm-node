import log from '../config/log4js.config';
import DoctorService from '../apis/doctor/doctor.service';
import expect from 'expect.js';

var doctorService = new DoctorService();

describe('doctorDao', function() {
    //this.timeout(15000);
    describe('#insert()', function() {
        it('creates a doctor', function() {
            //this.timeout(700);
            var doctor = {
                id: null,
                name: 'John',
                email: 'jhon@gmail.com',
                picUrl: 'jhon',
                speciality: 'dental',
                experience: 7
            };
            return doctorService.create(doctor, (res) => {
                //log.info('value after insert: ' + JSON.stringify(res));
            }).then((result) => {
                //expect(res.id).to.be.greaterThan(0);
                doctorService.delete(result.id, (result) => {});
            });
        });
    });

    describe('#update()', function() {
        it('doctor updated', function() {
            //this.timeout(800);
            var doctor = {
                id: 9,
                name: 'John doe',
                email: 'jhon@gmail.com',
                picUrl: 'jhon',
                speciality: 'dental',
                experience: 7
            };
            return doctorService.update(doctor, (result) => {}).then(() => {
                doctorService.delete(doctor.id, (result) => {});
            });
        });
    });

    describe('#readAll()', function() {
        it('Get all doctors', function() {
            //this.timeout(900);
            return doctorService.getAll((result) => {
                //log.info('all data from doctor: ' + JSON.stringify(result));
            });
        });
    });

    describe('#readById()', function() {
        it('Get doctor by id', function() {
            //this.timeout(1000);
            return doctorService.getById(1, () => {}).then((res) => {
                //log.info('get doctor data by id:' + JSON.stringify(res));
            });
        });
    });

    describe('#delete()', function() {
        it('Doctor deleted', function() {
            //this.timeout(1100);
            return doctorService.delete(10, () => {}).then((res) => {
                //log.info('deleted doctor');
            });
        });
    });
});