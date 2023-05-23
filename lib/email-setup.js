const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  if (!global.transporter) {
    global.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
  }

  let info = await global.transporter.sendMail({
    from: "Damilola Obidairo Mentoring PLatform <fortunechinenyem@gmail.com>",
    to: options.email,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.message,
    html: options.template,
  });

  console.log("Message sent: %s", info.messageId);
  return info;
};

module.exports = sendEmail;
