const ClassDescription = require('../models/classDescription.js');
const messages = require('../util/errorMessages.js');
const GenericError = require('../util/genericError.js');

exports.create = (req, res) => {
    const classDescription = new ClassDescription(req.body);
    classDescription
        .save(function (err, result) {
            if (result != null) {
                res.status(201);
                res.send(result)
            } else {
                res.status(400);
                res.send(new GenericError(messages.CREATE_CLASS_DESCRIP_ERROR, err));
            }
        })
};

exports.findAll = (req, res) => {
    ClassDescription.find({}, function (err, results) {
        if (results != null) {
            res.status(200);
            res.send(results);
        } else {
            res.status(404);
            res.send(new GenericError(messages.FIND_ALL_CLASS_DESCRIP_ERROR, err));
        }
    })
};

exports.getById = (req, res) => {
    ClassDescription.findById(req.params.classDescriptionId, function (err, result) {
        if (result != null) {
            res.status(200);
            res.send(result);
        } else {
            res.status(404);
            res.send(new GenericError(messages.FIND_CLASS_DESCRIP_ERROR, err));
        }
    })
};

exports.updateById = (req, res) => {
    ClassDescription.findByIdAndUpdate(req.params.classDescriptionId, {$set: req.body}, {new: true}, function (err, result) {
        if (result != null) {
            res.status(200);
            res.send(result);
        } else {
            res.status(400);
            res.send(new GenericError(messages.UPDATE_CLASS_DESCRIP_ERROR, err));
        }
    })
};

exports.deleteById = (req, res) => {
    ClassDescription.findByIdAndDelete(req.params.classDescriptionId, function (err, result) {
        if (result != null) {
            res.status(200);
            res.send();
        } else {
            res.status(400);
            res.send(new GenericError(messages.DELETE_CLASS_DESCRIP_ERROR, err));
        }
    })
};



