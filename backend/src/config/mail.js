import nodemailer from 'nodemailer';

export const sendMail = (to, subject, htmlContent) => {
  return new Promise((resolve, reject) => {
    let configMail = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "duyp7484@gmail.com",  // Đảm bảo tài khoản chính xác
        pass: "yycxoaqywrvhtvsh"     // Đảm bảo đây là mật khẩu ứng dụng
      },
      tls: {
        rejectUnauthorized: false  // Cho phép chứng chỉ tự ký
      }
    });

    let infoMail = {
      from: "duyp7484@gmail.com",
      to,       // Địa chỉ người nhận
      subject,  // Tiêu đề email
      html: htmlContent // Nội dung HTML của email
    };

    configMail.sendMail(infoMail, (err, info) => {
      if (err) {
        console.error("Error sending email:", err);  // Log lỗi chi tiết
        reject(false);
      } else {
        console.log("Email sent successfully:", info.response);
        resolve(true);
      }
    });
  });
};