const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const classAvailabilitySchema = new Schema({
    classAvailabilityId: {
        type: Schema.Types.ObjectId
    },
    dayOfTheWeek: {
        type: Number,
        required: false
    },
    timeOfTheWeek: {
        type: String,
        unique: false,
    },
    originalAmountOfOpenings: {
        type: Number,
        required: false
    },
    usersAttending: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false
    }],
    classDescriptionId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    }
}, {versionKey: false});


classAvailabilitySchema.methods.toString = function () {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
}

module.exports = mongoose.model('ClassAvailability', classAvailabilitySchema);
