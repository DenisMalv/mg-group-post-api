const express = require('express')

const router = express.Router()

const sendEmailController = require('../../controllers/mail')

router.post('/', sendEmailController)

module.exports = router

