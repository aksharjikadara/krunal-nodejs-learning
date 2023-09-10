const express = require('express');
router = express.Router();

const { createUser, getAllUsers} = require('../controller/user')

router.post('/user/create', createUser)
router.get('/user/getAll', getAllUsers)

module.exports = router
