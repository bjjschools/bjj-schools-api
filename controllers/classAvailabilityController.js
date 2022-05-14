const ClassAvailability = require('../models/classAvailability.js');
const messages = require('../util/errorMessages.js');
const GenericError = require('../util/genericError.js');

exports.create = (req, res) => {
    const classAvailability = new ClassAvailability(req.body);
    classAvailability
        .save(function (err, result) {
            if (result != null) {
                res.status(201);
                res.send(result)
            } else {
                res.status(400);
                res.send(new GenericError(messages.CREATE_CLASS_AVAILABILITY_ERROR, err));
            }
        })
};

exports.findAll = (req, res) => {
    ClassAvailability.find({}, function (err, results) {
        if (results != null) {
            res.status(200);
            res.send(results);
        } else {
            res.status(404);
            res.send(new GenericError(messages.FIND_ALL_CLASS_AVAILABILITY_ERROR, err));
        }
    })
};

exports.getById = (req, res) => {
    ClassAvailability.findById(req.params.classAvailabilityId, function (err, result) {
        if (result != null) {
            res.status(200);
            res.send(result);
        } else {
            res.status(404);
            res.send(new GenericError(messages.FIND_CLASS_AVAILABILITY_ERROR, err));
        }
    })
};

exports.updateById = (req, res) => {
    ClassAvailability.findByIdAndUpdate(req.params.classAvailabilityId, {$set: req.body}, {new: true}, function (err, result) {
        if (result != null) {
            res.status(200);
            res.send(result);
        } else {
            res.status(400);
            res.send(new GenericError(messages.UPDATE_CLASS_AVAILABILITY_ERROR, err));
        }
    })
};

exports.deleteById = (req, res) => {
    ClassAvailability.findByIdAndDelete(req.params.classAvailabilityId, function (err, result) {
        if (result != null) {
            res.status(200);
            res.send();
        } else {
            res.status(400);
            res.send(new GenericError(messages.DELETE_CLASS_AVAILABILITY_ERROR, err));
        }
    })
};



