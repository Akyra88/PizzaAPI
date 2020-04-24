const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

// create Pizzeria Schema & model
const PizzeriaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rate: {
        type: String
    },
     open: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
});

const Pizzeria = mongoose.model('pizzeria', PizzeriaSchema);
// export model to be used in other files
module.exports = Pizzeria;

