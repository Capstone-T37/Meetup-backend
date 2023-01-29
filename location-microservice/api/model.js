const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true,
            default: 'Point',
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
});

locationSchema.index({ location: '2dsphere' });
locationSchema.plugin(timestamps);


module.exports = mongoose.model('Location', locationSchema);