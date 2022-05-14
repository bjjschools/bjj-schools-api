const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const classDescriptionSchema = new Schema({
    classDescriptionId: {
        type: Schema.Types.ObjectId
    },
    name: {
        type: String,
        trim: true,
        uppercase: true,
        unique: false,
        required: true
    },
    description: {
        type: String,
        trim: true,
        uppercase: false,
        unique: false,
        required: false
    },
    classAvailability: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    active: {
        type: Boolean,
        required: true
    }

}, { versionKey: false });

classDescriptionSchema.methods.toString = function () {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
}

module.exports = mongoose.model('ClassDescription', classDescriptionSchema);
