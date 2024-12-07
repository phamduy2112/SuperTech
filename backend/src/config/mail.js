import nodemailer from 'nodemailer';

export const sendMail = (to, subject, text, html) => {
  return new Promise((resolve, reject) => {
    // Cấu hình email
    let configMail = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "duyp7484@gmail.com", // Địa chỉ email của bạn
        pass: "yycxoaqywrvhtvsh"   // Mật khẩu ứng dụng
      },
      tls: {
        rejectUnauthorized: false // Cho phép sử dụng chứng chỉ tự ký
      }
    });

    // Nội dung email
    let infoMail = {
      from: "duyp7484@gmail.com", // Email gửi
      to,                        // Email nhận
      subject,                   // Tiêu đề
      text,                      // Nội dung văn bản thuần
      html                       // Nội dung giao diện HTML
    };

    console.log("Email info:", infoMail);

    // Gửi email
    configMail.sendMail(infoMail, (err, info) => {
      if (err) {
        console.error("Error sending email:", err); // Ghi lỗi nếu có
        reject(false);
      } else {
        console.log("Email sent successfully:", info.response);
        resolve(true);
      }
    });
  });
};
