'use strict';
const admin = require('firebase-admin');
const serviceAccount = require("../service-account.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

let controllers = {
    root: (_, res) => {
        res.send("Root endpoint")
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const { user } = await admin.auth().getUserByEmail(email);
            const isValid = await admin.auth().verifyPassword(user.uid, password);
            if (isValid) {
                const customToken = await admin.auth().createCustomToken(user.uid,{expiresIn: null});
                res.send({ customToken });
            } else {
                res.status(401).send({ error: 'Invalid email or password' });
            }
        } catch (error) {
            res.status(401).send({ error: 'Invalid email or password' });
        }
    },
    signup: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user= await admin.auth().createUser({
                email,
                password
            }).catch(err => {
                console.log(err);
                throw new Error(err);
            });
            const customToken = await admin.auth().createCustomToken(user.uid,{expiresIn: null});
            res.send({ customToken });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
        
    }



};

module.exports = controllers;