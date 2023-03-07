const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define user schema
const activitySchema = new Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        required: true
    },
    address:{
        type: String,
        required: true,
        unique: true
    },
    size: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    participants: {
        type: [Schema.Types.ObjectId],
        required: true
    },
    created_by: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

module.exports = mongoose.model('Activity', activitySchema);