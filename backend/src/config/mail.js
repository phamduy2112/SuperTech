import nodemailer from 'nodemailer';
export const sendMail = (to, subject, text) => {
    return new Promise((resolve, reject) => {
      let configMail = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "duyp7484@gmail.com",  // Ensure this is correct
          pass: "yycxoaqywrvhtvsh"     // Ensure this is your app-specific password
        },
        tls: {
          rejectUnauthorized: false  // This allows self-signed certificates
        }
      });
  
      let infoMail = {
        from: "duyp7484@gmail.com",
        to,
        subject,
        text
      };
      console.log(infoMail);
      
      configMail.sendMail(infoMail, (err, info) => {
        if (err) {
          console.error("Error sending email:", err);  // Log the error details
          reject(false);
        } else {
          console.log("Email sent successfully:", info.response);
          resolve(true);
        }
      });
    });
  };