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
        res.send("Root endpoint - activity")
    },
    getActivity: (req, res) => {
        Activity.findOne({ _id: req.params.activityId }, (err, activity) => {
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
        Activity.updateOne({ _id: req.params.activityId }, req.body, (err, activity) => {
            if (err) return res.status(500).send("Internal server error");
            res.send(activity);
        })
    },
    deleteActivity: (req, res) => {
        Activity.deleteOne({ _id: req.params.activityId }, (err) => {
            if (err) return res.status(500).send("Internal server error");
            res.send(`activity: ${req.params.title} deleted successfully`);
        })
    },
    addParticipantToActivity: async (req, res) => {
        let aId = req.params.activityId
        let userId = req.params.userId
        if((typeof aId) === 'string'){
            aId = mongoose.mongo.ObjectId(aId);
         }
        if((typeof userId) === 'string'){
            userId = mongoose.mongo.ObjectId(userId);
         }
        try {
            await Activity.findByIdAndUpdate(
                {_id: aId},
                { $push : {participants: userId}}, 
                {upsert: true}    
              );
              res.send(userId)
        } catch (error) {
            res.status(500).send(error);
        }
    },
    removeParticipantFromActivity: async (req, res) => {
        let aId = req.params.activityId
        let userId = req.params.userId
        if((typeof aId) === 'string'){
            aId = mongoose.mongo.ObjectId(aId);
         }
        if((typeof userId) === 'string'){
            userId = mongoose.mongo.ObjectId(userId);
         }
        try {
            await Activity.findByIdAndUpdate(
                {_id: aId},
                { $pull : {participants: userId}}, 
                {upsert: true}    
              );
              res.send(userId)
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

module.exports = controllers;
