module.exports = (sequelize, DataTypes) => {
    var RolePrivilege = sequelize.define('role_privilege', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        roleId: {
            type: DataTypes.INTEGER
        },
        privilegeId: {
            type: DataTypes.INTEGER
        }
    }, {
        freezeTableName: true
    });
    return RolePrivilege;
};