const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "anjalihariharan28@gmail.com",
    subject: "Welcome",
    text: `Welcome to the app, ${name}`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "anjalihariharan28@gmail.com",
    subject: "Goodbye",
    text: `Bye bye ${name}`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
