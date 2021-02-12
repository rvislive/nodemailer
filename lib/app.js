const nodemailer = require("nodemailer");
require('dotenv/config');

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
    this.props = props;
    let info = await transporter.sendMail({
        from: props.from || process.env.MAIL_USERNAME,
        to: props.to,
        subject: props.subject,
        text: `Hello There, ${props.html.title}`
    })
    console.log("Message sent: %s", info.messageId);
}