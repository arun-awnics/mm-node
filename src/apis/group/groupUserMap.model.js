module.exports = (sequelize, DataTypes) => {
    var GroupUserMap = sequelize.define('group_user_map', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        groupId: {
            type: DataTypes.INTEGER
        },
        userId: {
            type: DataTypes.INTEGER
        },
        createdBy: {
            type: DataTypes.STRING
        },
        updatedBy: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true
    });
    return GroupUserMap;
};