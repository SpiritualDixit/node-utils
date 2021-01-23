import { GmailMailer } from './lib/index.js';

const mailer = new GmailMailer('your-mail-id', 'your-password');

mailer.send({
  to: 'xyz@example.com',
  subject: `Test Subject`,
  html: '<h2> Test Mail </h2>',
  text: '<h2> Test Mail </h2>',
});
