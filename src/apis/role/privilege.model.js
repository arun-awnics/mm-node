module.exports = (sequelize, DataTypes) => {
    var Privilege = sequelize.define('privilege', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true
    });
    return Privilege;
};