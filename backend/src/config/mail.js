import nodemailer from 'nodemailer';
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";
const models = initModels(sequelize);
import sequelize from "../models/connect.js";
const { setting } = models;
const getSMTPFromDatabase = async () => {
  return await setting.findOne({ where: { id: 12 }, where: { id: 13 }, where: { id: 14 } });

};
export const sendMail = async (to, subject, text, html) => {
  const setting = await getSMTPFromDatabase();
        const SMTP_USER = setting.value;
        const SMTP_PASSWORD = setting.value;
        const SMTP_MAIL_CONTENT = setting.value;
  return new Promise((resolve, reject) => {
    // Cấu hình email
    let configMail = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMTP_USER, // Địa chỉ email của bạn
        pass: SMTP_PASSWORD   // Mật khẩu ứng dụng
      },
      tls: {
        rejectUnauthorized: false 
      }
    });

    let infoMail = {
      from: SMTP_MAIL_CONTENT,  
      to,                        
      subject,                   
      text,                      
      html                      
    };

    console.log("Email info:", infoMail);

    // Gửi email
    configMail.sendMail(infoMail, (err, info) => {
      if (err) {
        console.error("Error sending email:", err);  
        reject(false);
      } else {
        console.log("Email sent successfully:", info.response);
        resolve(true);
      }
    });
  });
};
