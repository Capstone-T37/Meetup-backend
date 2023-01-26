'use strict';

const controller = require('./controller');

module.exports = (app) => {
    app.route('/')
        .get(controller.root);
    app.route('/api/v1/users')
        .get(controller.getUsers)
        .post(controller.addUser)
    app.route('/api/v1/users/:username')
        .get(controller.getUser)
        .patch(controller.updateUser)
        .delete(controller.deleteUser)

};
