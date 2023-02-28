'use strict';
const mongoose = require('mongoose');
const properties = require('../package.json')
const Activity = require('./model')
mongoose.connect('mongodb://mongo-container:27017/mydb', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    console.log("we're connected!")
});

let controllers = {
    root: (_, res) => {
        res.send("Root endpoint")
    },
    getActivity: (req, res) => {
        Activity.findOne({ activityId: req.params.activityId }, (err, activity) => {
            if (err) return res.status(500).send("Internal server error");
            res.send(activity);
        })
    },
    getActivities: (_, res) => {
        Activity.find((err, activities) => {
            if (err) return res.status(500).send("Internal server error");
            res.send(activities);
        });
    },
    addActivity: (req, res) => {
        try {
            const activity = new Activity(req.body);
            activity.save((err, result) => {
                if (err) return res.status(500).send(err);
                res.send(result.id);
            });
        } catch (error) {
            res.status(500).send(error);
        }

    },
    updateActivity: (req, res) => {
        Activity.updateOne({ activityId: req.params.activityId }, req.body, (err, activity) => {
            if (err) return res.status(500).send("Internal server error");
            res.send(activity);
        })
    },
    deleteActivity: (req, res) => {
        Activity.deleteOne({ activityId: req.params.activityId }, (err) => {
            if (err) return res.status(500).send("Internal server error");
            res.send(`activity: ${req.params.title} deleted successfully`);
        })
    }
};

module.exports = controllers;
