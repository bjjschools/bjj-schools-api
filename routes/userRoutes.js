const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');

router.post('/',userController.create);

router.get('/', userController.findAll)

router.get('/:userId', userController.getById)

router.patch('/:userId', userController.updateById)

router.delete('/:userId', userController.deleteById)

module.exports = router;

