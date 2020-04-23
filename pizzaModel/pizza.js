const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }
    // add in geo location
});

const Pizzeria = mongoose.model('pizzeria', PizzeriaSchema);

module.exports = Pizzeria;