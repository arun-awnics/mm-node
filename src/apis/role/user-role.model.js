module.exports = (sequelize, DataTypes) => {
    var UserRole = sequelize.define('user_role', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER
        },
        roleId: {
            type: DataTypes.INTEGER
        }
    }, {
        freezeTableName: true
    });
    return UserRole;
};