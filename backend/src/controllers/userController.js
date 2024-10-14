import sequelize from "../models/connect.js";
import { responseSend } from "../config/response.js";
import initModels from "../models/init-models.js";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import { createToken } from "../config/jwt.js";
import { sendMail } from "../config/mail.js";
import { deleteFile, upload } from "../config/upload.js";
import path from"path"

let models = initModels(sequelize); 
let User = models.user; 


const getUser = async (req, res) => {
    let data = await User.findAll();
    responseSend(res, data, "Thành công!", 200);
};

const register = async (req, res) => {
    try{
        const {user_name,user_email,user_password}=req.body
        const user = await User.findOne({ where: { user_email } });
        if(user){
            return responseSend(res,{success:false},"Email đã tồn tại",200)
        }
        const hashedPassword=await bcrypt.hash(user_password,10)
        await User.create({
            user_name,
            user_email,
            user_password:hashedPassword
        })
        responseSend(res,{
            success: true
        },"Đăng kí thành công!",201)
        
        }catch(e){
            console.log(e);
            
        }
    
}
const login=async(req,res)=>{
    try{
        const { email, password } = req.body;
        let user=await User.findOne({where:{user_email:email}});
        if(!user){
            return res.status(401).json({
                message:"Incorrect email or password",
                success:false
            });
        
        }
        const isPasswordMatch=await bcrypt.compare(password,user.user_password);
        if(!isPasswordMatch){
            return res.status(401).json({
                message:"Incorrect email or password",
                success:false
            })
        }
        const userDetail={
            user_id:user.user_id
        }
        const token=createToken(userDetail)
       
      

 
        return res.cookie('token',token,{httpOnly:true,sameSite:'strict',maxAge:1*24*60*60*1000}).json({
            message:`Welcome back ${user.username}`,
            success:true,
            user
        })
 
        
    }catch(e){
        console.log(e);
        
    }
}
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

        
        user.password = hashedPassword;
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

// const forgetCheckMail=async(req,res)=>{
//     // check mail 
//     let {email}=req.body;
//     let checkEmail=await User.findOne({
//         where:{
//           email:email
//         }
       
//     })
//     console.log(checkEmail);
//     if(!checkEmail){
//         responseSend(res,"","Email không tồn tại",404)
//     }
//     let dnow=new Date()
//     let code=generateRandomString(6)
//     // tạo code
//     let newCode={
//         code,
//         expired:dnow.setMinutes(dnow.getMinutes()+10)
//     }

//     //send mail code
//     sendMail(email,"Lấy lại mật khẩu",code)
//     responseSend(res,true,"a",200)
// }

export {
    getUser,
    register,
    updateUser,
    login,
    userDetail,
    updateImage,
    changePassword,
    verifyOldPassword,
    logout
    // forgetCheckMail,
    // forgetCheckCode
};
