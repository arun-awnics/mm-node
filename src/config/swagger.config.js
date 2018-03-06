/*
 *Swagger api configuration
 */

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDefinition = {
    info: {
        title: 'Node Swagger API',
        version: '1.0.0',
        description: 'Demonstrating how to desribe a RESTful API with Swagger',
    },
    host: 'localhost:3000',
    basePath: '/',
};

const options = {
    swaggerDefinition: swaggerDefinition,
    apis: ['dist/apis/contact/*.js', 'dist/apis/doctor/*.js', 'dist/apis/message/*.js', 'dist/apis/user/*.js', 'dist/apis/group/*.js', 'dist/apis/orderRequest/*.js', 'dist/apis/specialities/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;