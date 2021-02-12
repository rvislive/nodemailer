const nodemailer = require("nodemailer");
require('dotenv/config');
const ejs = require('ejs');

let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    }
})

module.exports = async function Email(props) {
    try {
        this.props = props;
        ejs.renderFile('../nodemailer/public/index.ejs', { user: props.html }, async (error, result) => {
            if(error) {
                throw new Error(error);
            }
             
            let info = await transporter.sendMail({
                from: props.from || process.env.MAIL_USERNAME,
                to: props.to,
                subject: props.subject,
                html: result
                // html: { path: '../nodemailer/public/index.html' }
            })
            
            if(info.messageId) {
                console.log('Email Sent');
            }
        })
    } catch (error) {
        console.log(error);
    }
}