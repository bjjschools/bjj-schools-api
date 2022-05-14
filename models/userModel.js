const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const userSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId
    },
    userlevel:{
        type: Number,
        trim:true,
        unique: false,
        required: true
    },
    name:{
        type: String,
        trim:true,
        uppercase:true,
        unique: false,
        required: true
    },
    dateofbirth:{
        type: String,
        trim:true,
        uppercase:true,
        unique: false,
        required: true
    },
    address:{
        type: String,
        trim:true,
        lowercase:true,
        unique: false,
        required: true
    },
    phone:{
        type: Number,
        unique: false,
        required: true
    },
    email:{
        type: String,
        trim:true,
        lowercase:true,
        unique: false,
        required: true
    },
    nif:{
        type: Number,
        unique: true,
        required: true
    },
    classes:[{
        type: mongoose.Schema.Types.ObjectId,
        required:false
    }],
    active:{
        type: Boolean,
        required: true
    }

}, { versionKey: false });

userSchema.methods.toString = function (){
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
}

module.exports = mongoose.model('User', userSchema);
