import consultationScheduleModel from './index';
import sequelize from '../../util/conn.mysql';
import log from '../../config/log4js.config';

/*
DAO for Doctor api
*/
class ConsultationDao {
    constructor() {}

    /**
     * insert method
     */
    insert(consultation, callback) {
        sequelize.sync({ force: false }).then(() => {
            return sequelize.transaction(function(t) {
                return consultationScheduleModel.consultation_schedule.create(consultation, { transaction: t }).then(function(consultationInserted) {
                    callback(consultationInserted);
                });
            });
        });
    }

    /**
     * read all method
     */
    readAll(callback) {
        return consultationScheduleModel.consultation_schedule.findAll().then((allConsultation) => {
            callback(allConsultation);
        });
    }

    /**
     * read method based on id
     */
    readById(id, callback) {
        return consultationScheduleModel.consultation_schedule.findById(id).then((consultation) => {
            callback(consultation);
        });
    }

    /**
     * Update method
     */
    update(consultation, callback) {
        return sequelize.transaction(function(t) {
            return consultationScheduleModel.consultation_schedule.update(consultation, {
                where: {
                    id: consultation.id
                }
            }, { transaction: t }).then(function(consultationUpdated) {
                callback(consultationUpdated);
            });
        });
    }

    /**
     * Delete method
     */
    delete(id, callback) {
        return sequelize.transaction(function(t) {
            return consultationScheduleModel.consultation_schedule.destroy({
                where: {
                    id: id
                }
            }).then(function(consultationDeleted) {
                callback(consultationDeleted);
            });
        });
    }
}

export default ConsultationDao;