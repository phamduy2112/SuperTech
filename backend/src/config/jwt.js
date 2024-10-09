import jwt from 'jsonwebtoken'

// create token
export const createToken=(data)=>{
 // payload,signature,header
 // 2 tham số =>string.object,buffer
 // 3 tham so: (data)=>object

 return jwt.sign({data},"BI_MAT",{expiresIn:'1d'})
}
// verifi token: kiem tra token  
 // check lỗi
    // 1/token k hợp lệ;
    // 2/token hết hạn
    // 3/token sai khóa bí mật
  
        // k lỗi là null

        // có lỗi là khác null
        
        
// tao createTokenRef

export const createTokenRef=(data)=>{

   
    return jwt.sign({data},"BI_MAT_REF",{expiresIn:'60d'})
   }
   export const checkTokenRef=(token)=> jwt.verify(token,"BI_MAT",(error)=>   error)

export const verifyToken=(token)=> jwt.verify(token,"BI_MAT",(error)=>   error)
  

// decode token
export const decodeToken=(token)=>{
    return jwt.decode(token)
}
export const middleToken=(req,res,next)=>{
    let {token}=req.headers;
    let error=verifyToken(token)
    if(error) res.status(401).send(error.name)
    else next();
    
}
