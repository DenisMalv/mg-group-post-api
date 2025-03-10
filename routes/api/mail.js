const express = require('express')

const router = express.Router()

const recaptchaController = require('../../controllers/recaptcha')
const sendEmailController = require('../../controllers/mail')

router.post('/', recaptchaController, sendEmailController)

module.exports = router

