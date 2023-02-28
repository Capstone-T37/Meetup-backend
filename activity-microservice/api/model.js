const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define user schema
const activitySchema = new Schema({
    activityId: {
        type: Number,
        required: true,
        unique: true
    },
    title:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('Activity', activitySchema);