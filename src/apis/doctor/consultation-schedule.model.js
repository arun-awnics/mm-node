module.exports = (sequelize, DataTypes) => {
    var ConsultationSchedule = sequelize.define('consultation_schedule', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        patientId: {
            type: DataTypes.STRING
        },
        doctorId: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        createdBy: {
            type: DataTypes.STRING
        },
        updatedBy: {
            type: DataTypes.STRING
        },
        lastActive: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true
    });
    return ConsultationSchedule;
};