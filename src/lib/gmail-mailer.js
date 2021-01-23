import Mailer from './mailer.js';

// To use this script, you need to "Allow less secure apps to access account".
// https://myaccount.google.com/lesssecureapps

export class GmailMailer extends Mailer {
  constructor(user, pass) {
    const host = 'smtp.gmail.com';
    const port = 587;
    super({ host, port, user, pass });
  }
}

export default GmailMailer;
