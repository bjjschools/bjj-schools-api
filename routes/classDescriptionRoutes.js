const express = require('express');
const router = express.Router();

const classDescriptionController = require('../controllers/classDescriptionController.js');

router.post('/',classDescriptionController.create);

router.get('/', classDescriptionController.findAll)

router.get('/:classDescriptionId', classDescriptionController.getById)

router.patch('/:classDescriptionId', classDescriptionController.updateById)

router.delete('/:classDescriptionId', classDescriptionController.deleteById)

module.exports = router;

