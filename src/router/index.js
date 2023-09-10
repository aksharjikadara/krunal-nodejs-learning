const express = require('express');
router = express.Router();

const { createUser, getAllUsers, getById } = require('../controller/user')

router.post('/user/create', createUser)
router.get('/user/getAll', getAllUsers)
router.get('/user/get/:id', getById)

module.exports = router
