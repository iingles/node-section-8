const express = require('express')

const router = express.Router()

//Admin Route controller
const adminController = require('../controllers/admin')

router.get('/', adminController.getIndex)

router.get('/account', adminController.getAccount)

router.get('/about', adminController.getAbout)

module.exports = router