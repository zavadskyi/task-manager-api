const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'serhii.zavadskyi@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'serhii.zavadskyi@gmail.com',
    subject: 'Good bye!',
    text: `Thanks for being with us, ${name}.`
  });
};
module.exports = { sendWelcomeEmail, sendCancelationEmail };
