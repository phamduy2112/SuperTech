import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import { sendMail } from "../config/mail.js";
import initModels from "../models/init-models.js";
import bcrypt from "bcryptjs"
import { createToken, createTokenRef, decodeToken, verifyToken } from "../config/jwt.js";
import { deleteFile, upload } from "../config/upload.js";
import path from"path"
import nodemailer from 'nodemailer';



let models = initModels(sequelize); 
let User = models.user; 
const refreshTokens = [];

const getUser = async (req, res) => {
  try {
      let data = await User.findAll();
      responseSend(res, data, "Thành công!", 200);
  } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
      res.status(500).json({
          message: "Lỗi",
          success: false,
      });
  }
};

const register = async (req, res) => {
    try{
        const {user_name,user_email,user_password}=req.body
        console.log(user_name,user_email,user_password);
        
        const user = await User.findOne({ where: { user_email } });
        if(user){
            return responseSend(res,{success:false},"Email đã tồn tại",200)
        }
        const hashedPassword=await bcrypt.hash(user_password,10)
        await User.create({
            user_name,
            user_email,
            user_password:hashedPassword,
            user_role:"user"
        })
        responseSend(res,{
            success: true
        },"Đăng kí thành công!",201)
        
        }catch(e){
            console.log(e);
            
        }
    
}
const login = async (req, res) => {
  try {
      const { email, password } = req.body;

      console.log("Email Input:", email); // Log email nhập vào
      console.log("Password Input:", password); // Log mật khẩu nhập vào

      const user = await User.findOne({ where: { user_email: email.trim() } }); // Sử dụng trim() để loại bỏ khoảng trắng
      if (!user) {
          console.log("No user found with that email");
          return res.status(401).json({
              message: "Incorrect email or password",
              success: false,
          });
      }

      console.log("Hashed password from database:", user.user_password); // Log mật khẩu đã mã hóa từ DB

      const isPasswordMatch = await bcrypt.compare(password, user.user_password);
      console.log("Password match result:", isPasswordMatch); // Log kết quả so sánh mật khẩu

      if (!isPasswordMatch) {
          return res.status(401).json({
              message: "Incorrect email or password",
              success: false,
          });
      }

      const userDetail = {
          user_id: user.user_id,
          user_role:user.user_role
      };
      const token = createToken(userDetail);
      const tokenRef = createTokenRef(userDetail);

      return responseSend(res, {
          token: token,
          refreshToken: tokenRef,
          success: true,
      }, "Thành công!", 200);
  } catch (e) {
      console.error("Error in login:", e);
      return res.status(500).json({
          message: "Internal Server Error",
          success: false,
      });
  }
}
const resetToken = async (req, res) => {
    try {
        let {token}=req.body;
        console.log("token",token);
        let errorToken=verifyToken(token);
        // console.log(token);
        if(errorToken!=null && errorToken.name!="TokenExpiredError"){
            responseSend(res,"","Not Authorize !",401);
            return
    
        }
        // check refesh token con2 hang k
        //UserId: lay tu token
        let {data}=decodeToken(token);
        // console.log(data);
        let getUser=await User.findByPk(data.user_id)
        console.log(data);
        
        // console.log(getUser.dataValues.refresh_token);
        // if(checkTokenRef(getUser.dataValues.refresh_token)!=null){
        //     responseSend(res,"","Not Authorize !",401);
        //     return
        // }else{
        //     console.log("thanh cong");
        // }
         //create token
          let tokenNew=createToken({
            user_id:getUser.dataValues.user_id,
        });
        // // login thành công
        console.log(tokenNew);
        responseSend(res,tokenNew,"Thành công !",200);
    } catch (e) {

        console.log(e);
        
        console.error("Error in resetToken:", e);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false,
        });
    }
    
};



const loginFacebook = async (req, res) => {
    try {
        const { face_app_id, name, email, id } = req.body; // Lấy id từ req.body

        // Kiểm tra xem người dùng đã tồn tại chưa
        let checkUser = await User.findOne({
            where: {
                email // Kiểm tra dựa trên email thay vì id
            }
        });

        // Nếu người dùng chưa tồn tại, tạo một người dùng mới
        if (!checkUser) {
            const newUser = {
                email,
                pass_word: "", // Mật khẩu có thể để trống cho người dùng đăng nhập bằng Facebook
                user_name: name,
                avatar: "", // Có thể cập nhật thêm sau này nếu có URL của avatar
                user_role: 1, // Có thể điều chỉnh dựa trên quyền hạn của người dùng
            };
            checkUser = await User.create(newUser); // Tạo người dùng mới
        }

        // Tạo token cho người dùng
        const token = createToken({
            userId: checkUser.user_id, // Sử dụng user_id từ checkUser
            role: checkUser.user_role // Sử dụng user_role từ checkUser
        });

        // Đăng nhập thành công
        return responseSend(res, token, "Thành công!", 200);
    } catch (error) {
        console.error("Login Facebook error:", error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};
const userDetail=async(req,res)=>{
    try{

       const user_id=req.id;
        
    
       const user=await User.findByPk(user_id, {
        attributes: { exclude: ['user_password'] } // Loại trừ cột password
    });

       responseSend(res, user, "Thành công!", 200);


    }catch(e){
        console.log(e);
        
    }
}
const updateUser = async (req, res) => {
    try {
        const user_id=req.id;
        const {user_name, user_address, user_phone}=req.body
        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false
            });
        }

        // Cập nhật các thuộc tính của user
        user.user_name =user_name;
        user.user_address =user_address;
        user.user_phone =user_phone;
   
        // Lưu thay đổi vào database
        await user.save();

        responseSend(res, user, "Cập nhận thành công!", 200);

        
    } catch (error) {
        console.error("Error updating user:", error);
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};
const updateImage=async(req,res)=>{
    try{
        const user_id=req.id;
        console.log("user_id",user_id);
        
        const user = await User.findByPk(user_id);

        upload.single('image')(req, res, async (err) => {
            if (err) {
              return res.status(400).json({ message: 'Lỗi khi upload file hình ảnh' });
            }
    
            
            
            if (user.user_image) {
                const filePath = path.join( 'public', 'img', user.user_image); // Đường dẫn đầy đủ của file cần xóa
                deleteFile(filePath);
            }
    const image = req.file ? `${req.file.filename}` : '';
    user.user_image=image
    const result=await user.save();


            if(result){
                responseSend(res, user, "Cập nhận thành công!", 200);
    
            } else {
                responseSend(res, null, "Thêm thất bại!", 500);
            }
    
        })
    
    }catch(e){

    }
}
// Logout 
 const logout=async(_,res)=>{
    try{
        return res.cookie("token","",{maxAge:0}).json({
            message:"Logged out successfully",
            success:true
        })
    }catch(e){
        console.log(e);
        
    }
}


// Bước 1: Xác thực mật khẩu cũ
const verifyOldPassword = async (req, res) => {
    try {
        const user_id = req.id; // ID của user được lấy từ token xác thực (JWT)
        const { oldPassword } = req.body; // Mật khẩu cũ người dùng nhập

        
        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(404).json({ message: "User không tồn tại" });
        }

       
        const isMatch = await bcrypt.compare(oldPassword, user.user_password);
        if (!isMatch) {
            return responseSend(res, null, "Mật khẩu cũ không chính xác", 400);

        }


       
        responseSend(res, null, "Thành công!", 200);
    } catch (error) {
        console.error(error);
        responseSend(res, "", "Có lỗi xảy ra!", 500);
    }
};
const changePassword = async (req, res) => {
    try {
        const user_id = req.id; 
        const { newPassword, confirmNewPassword } = req.body; 


        if (newPassword !== confirmNewPassword) {
            return res.status(400).json({ message: "Mật khẩu mới và xác nhận mật khẩu không khớp" });
        }

     
        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(404).json({ message: "User không tồn tại" });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        
        user.user_password = hashedPassword;
        await user.save();

        return res.status(200).json({ message: "Đổi mật khẩu thành công" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Đã xảy ra lỗi" });
    }
};
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
  }

  const forgetCheckMail = async (req, res) => {
    try {
      let { email } = req.body;
  
      // Check if email exists
      let checkEmail = await User.findOne({
        where: {
          user_email: email
        }
      });
  
      if (!checkEmail) {
        return responseSend(res, "", "Email không tồn tại", 404);
      }
  
      let dnow = new Date();
      let code = generateRandomString(6);
  
      // Create new code object with expiration
      let newCode = {
        code,
        expired: dnow.setMinutes(dnow.getMinutes() + 10) // Set expiration 10 minutes from now
      };
  
      // Save code to database (create or update)
      await models.code.create({
        user_id: checkEmail.user_id,  // Assuming user_id is in User model
        code: newCode.code,
        create_at: newCode.expired    // Save expiration time
      });
      console.log(checkEmail.user_id );
      
      // Send the reset code to the user's email
      await sendMail(email, "Lấy lại mật khẩu", code);
  
      // Set a timeout to delete the code after 3 minutes (180000 milliseconds)
      setTimeout(async () => {
        try {
          await models.code.destroy({
            where: { user_id: checkEmail.user_id }
          });
          console.log("Reset code deleted after 3 minutes");
        } catch (err) {
          console.error("Error deleting reset code:", err);
        }
      }, 180000); // 3 minutes
  
      // Send success response
      return responseSend(res, true, "Code sent successfully", 200);
      
    } catch (error) {
      // Log error and send response
      console.error("Error in forgetCheckMail:", error);
      return responseSend(res, "", "Internal server error", 500);
    }
  };
  const forgetCheckCode = async (req, res) => {
    try {
      // Lấy mã từ yêu cầu
      let { code } = req.body;
        console.log(code);
        
      // Kiểm tra mã trong cơ sở dữ liệu
      let checkCode = await models.code.findOne({
        where: { code: code }
      });
  
      if (!checkCode) {
        return responseSend(res, false, "Code không đúng", 200);
      }
  
      // Kiểm tra xem mã có hết hạn hay không
      const currentTime = new Date();
      if (currentTime > checkCode.dataValues.create_at) {
        // Nếu mã đã hết hạn, xóa nó và trả về thông báo
        await models.code.destroy({
          where: { code_id: checkCode.dataValues.code_id }
        });
        return responseSend(res, false, "Code đã hết hạn", 200);
      }
  
      // Nếu mã hợp lệ, xóa mã khỏi cơ sở dữ liệu
      await models.code.destroy({
        where: { code_id: checkCode.dataValues.code_id }
      });
  
      // Trả về phản hồi thành công
      return responseSend(res, true, "Code hợp lệ", 200);
    } catch (error) {
      // Bắt lỗi và gửi phản hồi lỗi
      console.error("Error in forgetCheckCode:", error);
      return responseSend(res, false, "Internal server error", 500);
    }
  };
  const resetPasswordNoToken = async (req, res) => {
    try {
      let { email, newPassword,confirmNewPassword } = req.body;
  
      // Check if the email exists
      let checkEmail = await User.findOne({
        where: { user_email: email }
      });
  
      if (!checkEmail) {
        return responseSend(res, "", "Email không tồn tại", 404);
      }
  
      // Hash the new password using bcrypt
      const hashedPassword = await bcrypt.hash(newPassword, 10);
  
      // Update the user's password in the database
      checkEmail.user_password = hashedPassword;
      await checkEmail.save();
  
      // Return success response
      return responseSend(res, true, "Mật khẩu đã được cập nhật", 200);
  
    } catch (error) {
      console.error("Error in resetPasswordNoToken:", error);
      return responseSend(res, "", "Internal server error", 500);
    }
  };
export {
    getUser,
    register,
    updateUser,
    login,
    userDetail,
    updateImage,
    changePassword,
    verifyOldPassword,
    logout,
    resetToken,
    loginFacebook,
    forgetCheckMail,
    forgetCheckCode,
    resetPasswordNoToken
};

