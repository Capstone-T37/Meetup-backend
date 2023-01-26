'use strict';
const admin = require('firebase-admin');
const serviceAccount = require("../service-account.json");
const jwt = require("jsonwebtoken");
const { initializeApp } = require('firebase/app');
const { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } =require("firebase/auth");

const firebaseConfig = {
    apiKey: "AIzaSyCmFMo9nr0d8uYZizQAD6qB7BdB8Zg_-vs",
    authDomain: "social-app-64380.firebaseapp.com",
    projectId: "social-app-64380",
    storageBucket: "social-app-64380.appspot.com",
    messagingSenderId: "714375950645",
    appId: "1:714375950645:web:96e5e967a1ade5c9675c7c",
    measurementId: "G-J8W22NLTL6"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

let controllers = {
    root: (_, res) => {
        res.send("Root endpoint")
    },
    protected: async (req, res) => {
        // Verify the JWT
        const token = req.headers['authorization'];
        jwt.verify(token, 'secret', function (err, decoded) {
            if (err) {
                res.status(401).json({ message: 'Invalid token' });
            } else {
                // Access the user data from the decoded JWT
                const user  = decoded;
                res.json({ message: `Welcome, ${user.user.user}` });
            }
        });
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        signInWithEmailAndPassword(auth,email, password)
            .then(function (user) {
                // Create and return a JWT
                const token = jwt.sign({ user }, 'secret', {});
                res.json({ token });
            })
            .catch(function (error) {
                // Handle errors
                const { code, message } = error;
                res.status(401).json({ code, message });
            });
    },
    signup: async (req, res) => {
        const { email, password } = req.body;
        createUserWithEmailAndPassword(auth,email, password)
            .then(function (user) {
                // Create and return a JWT
                const token = jwt.sign({ user }, 'secret', {});
                res.json({ token });
            })
            .catch(function (error) {
                // Handle errors
                const { code, message } = error;
                res.status(401).json({ code, message });
            });
    }



};

module.exports = controllers;