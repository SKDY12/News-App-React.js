var nodemailer = require('nodemailer');

function SendMail(props){

    const { destination, subject, message} = props;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'das843722@gmail.com',
          pass: 'tmtu pncr xqaw cdry'
        }
      });

      var mailOptions = {
        from: 'youremail@gmail.com',
        to: destination,
        subject: subject,
        text: message
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}
export default SendMail;





