module.exports = class GenericError {
    genericError = {
        internalCode: {
            type: String
        },
        message: {
            type: String,
            require: true
        },
        originalMessage:{
            type:String
        },
        timestamp: {
            type: String,
            require: true,
            default: Date.now
        }
    }

    constructor(message, originalMessage, timestamp) {
        this.genericError.internalCode = 12345; //TODO implement logic
        this.genericError.message = message;
        this.genericError.originalMessage = originalMessage;
        this.genericError.timestamp = timestamp;
    }

    toString(){
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    }

}
