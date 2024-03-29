'use strict';
const mongoose = require('mongoose');
const Location = require('./model')
mongoose.connect('mongodb://mongo-location-container:27017', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    console.log("we're connected!")
});

let controllers = {
    root: (_, res) => {
        res.send("Root endpoint")
    },
    getLocations: (_, res) => {
        Location.find((err, locations) => {
            if (err) return res.status(500).send("Something bad happened");
            res.send(locations);
        });
    },
    addLocation: (req, res) => {
        console.log(req.body);
        const location = new Location(req.body);
        console.log(location);
        location.save((err) => {
            if (err) {
                console.log(err);
                return res.status(500).send("Something bad happened")
            }
            res.send("location added success");
        });
    },
    updateLocation: (req, res) => {
        Location.updateOne({ user_id: req.params.user_id }, { $set: req.body }, (err, user) => {
            if (err) return res.status(500).send(err);
            res.send(user);
        })
    },
    deleteLocation: (req, res) => {
        Location.deleteMany({ user_id: req.params.user_id }, (err) => {
            if (err) return res.status(500).send("Something bad happened");
            res.send(`Location of user: ${req.params.user_id} deleted successfully`);
        })
    }
};

module.exports = controllers;
