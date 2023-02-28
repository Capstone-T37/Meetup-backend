'use strict';

const controller = require('./controller');

module.exports = (app) => {
    app.route('/')
        .get(controller.root);
    app.route('/api/v1/activities')
        .get(controller.getActivities)
        .post(controller.addActivity)
    app.route('/api/v1/activities/:activityId')
        .get(controller.getActivity)
        .patch(controller.updateActivity)
        .delete(controller.deleteActivity)

};
