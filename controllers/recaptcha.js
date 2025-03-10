const {controllerWrapper} = require('../helpers')

const recaptchaController = async (req,res,next) => {

    const {SECRET_RECAPTCHA_KEY} = process.env;
    const recaptcha = req.body['g-recaptcha-response']
    if(!recaptcha){
        return res.status(400).json({ error: 'reCAPTCHA required' });
    }

    const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_RECAPTCHA_KEY}&response=${recaptcha}`;
    const recaptchaResponse = await fetch(recaptchaUrl, { 
        method: 'POST', 
        headers:{
            Accept:"application/json",
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        },
    });
    const recaptchaData = await recaptchaResponse.json();
    if (!recaptchaData.success) {
        return res.status(400).json({ error: 'reCAPTCHA fetch error' });
    }
    next();
}


module.exports = controllerWrapper(recaptchaController)