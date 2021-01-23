import Mailer from './mailer.js';
import nodemailer from 'nodemailer';
import nodemailerSendgrid from 'nodemailer-sendgrid';

export class SendgridMailer extends Mailer {
  constructor(api_key) {
    const transporter = nodemailer.createTransport(
      nodemailerSendgrid({ apiKey: api_key })
    );
    super({ transporter });
  }
}

export default SendgridMailer;
