/*
 * configuration for log4js
 */

const log4js = require('log4js');
log4js.configure('./dist/config/log4js.json');

const logger = log4js.getLogger();
module.exports = logger;