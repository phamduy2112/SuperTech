import sequelize from "../models/connect.js"
import User from "../models/User.js"
import bcrypt from "bcryptjs"

User.init(sequelize);

const getUser = async (req, res) => {
    let data = await User.findAll();
    responseSend(res, data, "Thành công!", 200);
}
// Đăng kí
const register=async(req,res)=>{
    try{
    const {fullname,user_email,password}=req.body
    const user = await User.findOne({ where: { user_email } });
    if(user){
        return responseSend(res,{success:false},"Email đã tồn tại",401)
    }
    const hashedPassword=await bcrypt.hash(password,10)
    await User.create({
        user_id:2,
        user_name:fullname,
        user_email,
        user_password:hashedPassword,
        user_address:'',
        user_phone:'',
        user_image:'',
        user_role:'user',
    })
    responseSend(res,{
        success: true
    },"Đăng nhập thành công!",201)
    
    }catch(e){
        console.log(e);
        
    }

    
}
export {
    getUser,register
}