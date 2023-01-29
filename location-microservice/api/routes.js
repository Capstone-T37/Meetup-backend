'use strict';

const controller = require('./controller');

module.exports = (app) => {
    app.route('/')
        .get(controller.root);
    app.route('/api/v1/locations')
        .get(controller.getLocations)
        .post(controller.addLocation)
    app.route('/api/v1/locations/:user_id')
        .patch(controller.updateLocation)
        .delete(controller.deleteLocation)
};