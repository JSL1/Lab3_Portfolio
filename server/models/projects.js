const mongoose = require('mongoose');

const projectScheme = new mongoose.Schema({
    title: { 
        type: String,
        required: false
    },
    completion: {
        type: Date,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    live: {
        type: String,
        required: false
    },
    repo: {
        type: String,
        required: false
    }
});

// serialize fields
projectScheme.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id
    }
});

module.exports = mongoose.model('Project', projectScheme);