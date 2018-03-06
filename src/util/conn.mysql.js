import Sequelize from 'sequelize';
import log from '../config/log4js.config'

var sequelize = new Sequelize('test', 'arun', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    logging: false,
    pool: {
        max: 10,
        min: 0,
        idle: 10000,
        acquire: 10000,
        handleDisconnects: true,
        evict: 60000,
        connectRetries: 5
    }
});

sequelize = sequelize;

/**
 * connection authentication
 */
sequelize.authenticate()
    .then(() => log.info('connection successfull for sequelize'))
    .catch(error => log.error('error in connection: ', error));

module.exports = sequelize;