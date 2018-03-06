module.exports = (sequelize, DataTypes) => {
    var Role = sequelize.define('role', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING //user(R), bot(CR), admin(CRUD), doctor(CR)
        },
        description: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true
    });
    return Role;
};