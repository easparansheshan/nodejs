var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'easparansheshan456@gmail.com',
    pass: '*********' /*Password can't visible */
  }
});

var mailOptions = {
  from: 'easparansheshan456@gmail.com',
  to: 'info@uki.life',
  subject: 'Testing my nodemailer module',
  text: 'That is easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});