import nodemailer from 'nodemailer';

export default class Mailer {
  constructor(config) {
    const { transporter, host, port, user, pass } = config;
    if (transporter) {
      this.transporter = transporter;
    } else {
      this.transporter = nodemailer.createTransport({
        host, port, auth: { user, pass },
        secure: false, requireTLS: true
      });
    }
  }

  send(mailOptions) {
    // Message configuration: https://nodemailer.com/message/
    this.transporter.sendMail(mailOptions, error => {
      console.log(mailOptions);
      if (error) {
        console.error(`Error in sending mail: ${error}`);
      } else {
        console.info(`Message sent successfully`);
      }
    });
  }
}
