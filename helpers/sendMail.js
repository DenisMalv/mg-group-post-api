const nodemailer = require('nodemailer')
require('dotenv').config()

const {META_PASSWORD} = process.env

const nodemailerConfig = {
    host: "smtp.meta.ua",                
    port: 465,             // 25,465, 2525
    secure:true,
    auth:{
        user: "kissed03@meta.ua",          // my-createTestAccount(mail)-in-meta-ua dev.
        // pass: META_PASSWORD                // dev.
        // user: "mvt_mail_agent_one@meta.ua",          // customer(mail)-in-meta-ua
        pass: META_PASSWORD
    }
}

const transport = nodemailer.createTransport(nodemailerConfig)

// const email = {
//     to: 'reciever',
//     from: 'sender',
//     subject: 'test mail',
//     html: '<p>Test mail from my server</p>'
// }

const sendEmail = async(data) =>{
    // const email = {...data, from:'MVT BEARINGS LANDING kissed03@meta.ua'} //dev.
    const email = {...data, from:'mg-group - kissed03@meta.ua'}  //customer
    await transport.sendMail(email)
    return true
}

module.exports = sendEmail
