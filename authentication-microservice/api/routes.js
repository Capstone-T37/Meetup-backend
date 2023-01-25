'use strict';

const controller = require('./controller');

module.exports = (app) => {
    app.route('/')
        .get(controller.root);
    app.route('/api/v1/login')
        .post(controller.login)
    app.route('/api/v1/signup')
        .post(controller.signup)
};