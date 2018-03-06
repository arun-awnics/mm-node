import doctorModel from './index';
import sequelize from '../../util/conn.mysql';
import log from '../../config/log4js.config';

/*
DAO for Doctor api
*/
class DoctorDao {
    constructor() {}

    /**
     * insert method
     */
    insert(doctor, callback) {
        sequelize.sync({ force: false }).then(() => {
            sequelize.transaction().then(function(t) {
                doctorModel.doctor.create(doctor, { transaction: t }).then(function(doctorInserted) {
                    callback(doctorInserted);
                }).then(function() {
                    t.commit();
                }).catch(function(error) {
                    t.rollback();
                });
            });
        });
    }

    /**
     * read all method
     */
    readAll(callback) {
        doctorModel.doctor.findAll().then((allDoctor) => {
            callback(allDoctor);
        });
    }

    /**
     * read method based on id
     */
    readById(id, callback) {
        doctorModel.doctor.findById(id).then((doctor) => {
            callback(doctor);
        });
    }

    /**
     * Update method
     */
    update(doctor, callback) {
        sequelize.transaction().then(function(t) {
            doctorModel.doctor.update(doctor, {
                where: {
                    id: doctor.id
                }
            }, { transaction: t }).then(function(doctorUpdated) {
                callback(doctorUpdated);
            }).then(function() {
                t.commit();
            }).catch(function(error) {
                t.rollback();
            });
        });
    }

    /**
     * Delete method
     */
    delete(id, callback) {
        sequelize.transaction().then(function(t) {
            doctorModel.doctor.destroy({
                where: {
                    id: id
                }
            }).then(function(doctorDeleted) {
                callback(doctorDeleted);
            }).then(function() {
                t.commit();
            }).catch(function(error) {
                t.rollback();
            });
        });
    }
}

export default DoctorDao;