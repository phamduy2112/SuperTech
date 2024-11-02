import jwt from 'jsonwebtoken'

// create token
export const createToken=(data)=>{


 return jwt.sign({data},"BI_MAT",{expiresIn:'1d'})
}

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
    const decode=decodeToken(token)
    console.log(token);
    
    req.id=decode.data.user_id;
    let error=verifyToken(token)
    if(error) res.status(401).send(error.name)
    else next();
    
}
export const authorizeRoles = (userRole, allowedRoles) => {
    return allowedRoles.includes(userRole);
};