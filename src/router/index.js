const express = require('express');
router = express.Router();

const userController = require('../controller/user')
const notFoundController = require('../controller/404')

router.get('/', userController)
router.get('*', notFoundController)

module.exports = router




