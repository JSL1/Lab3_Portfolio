const mongoose = require('mongoose');

const referenceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    testimonial: {
        type: String,
        required: false
    },
    position: {
        type: String,
        required: false
    },
    company: {
        type: String,
        required: false
    }
});

// serialize fields
referenceSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id
    }
});

module.exports = mongoose.model('Reference', referenceSchema);