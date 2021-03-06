module.exports = (sequelize, DataTypes) => {
    var VisitorReport = sequelize.define('visitor_report', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        visitorId: {
            type: DataTypes.INTEGER
        },
        consultationId: {
            type: DataTypes.INTEGER //consultation_group primary key
        },
        type: {
            type: DataTypes.STRING
        },
        url: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING //seen, new, consulted, etc
        },
        createdBy: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        updatedBy: {
            type: DataTypes.INTEGER,
            defaultValue: null
        }
    }, {
        freezeTableName: true
    });
    return VisitorReport;
};