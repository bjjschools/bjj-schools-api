const User = require('../models/userModel.js');
const messages = require('../util/errorMessages.js');
const GenericError = require('../util/genericError.js');

exports.create = (req, res) => {
    const user = new User(req.body);
    user
        .save(function (err, result) {
            if (result != null) {
                res.status(201);
                res.send(result)
            } else {
                res.status(400);
                res.send(new GenericError(messages.CREATE_USER_ERROR, err));
            }
        })
};

exports.findAll = (req, res) => {
    User.find({}, function (err, results) {
        if (results != null) {
            res.status(200);
            res.send(results);
        } else {
            res.status(404);
            res.send(new GenericError(messages.FIND_ALL_USERS_ERROR, err));
        }
    })
};

exports.getById = (req, res) => {
    User.findById(req.params.userId, function (err, result) {
        if (result != null) {
            res.status(200);
            res.send(result);
        } else {
            res.status(404);
            res.send(new GenericError(messages.FIND_USER_ERROR, err));
        }
    })
};

exports.updateById = (req, res) => {
    User.findByIdAndUpdate(req.params.userId, {$set: req.body}, {new: true}, function (err, result) {
        if (result != null) {
            res.status(200);
            res.send(result);
        } else {
            res.status(400);
            res.send(new GenericError(messages.UPDATE_USER_ERROR, err));
        }
    })
};

exports.deleteById = (req, res) => {
    User.findByIdAndDelete(req.params.userId, function (err, result) {
        if (result != null) {
            res.status(200);
            res.send();
        } else {
            res.status(400);
            res.send(new GenericError(messages.DELETE_USER_ERROR, err));
        }

    })
};



