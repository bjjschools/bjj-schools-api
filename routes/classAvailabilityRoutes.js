const express = require('express');
const router = express.Router();

const classAvailabilityController = require('../controllers/classAvailabilityController.js');

router.post('/',classAvailabilityController.create);

router.get('/', classAvailabilityController.findAll)

router.get('/:classAvailabilityId', classAvailabilityController.getById)

router.patch('/:classAvailabilityId', classAvailabilityController.updateById)

router.delete('/:classAvailabilityId', classAvailabilityController.deleteById)

module.exports = router;

