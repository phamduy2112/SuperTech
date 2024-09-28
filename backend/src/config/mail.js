import nodemailer from 'nodemailer'

export const sendMail=(to,subject,text)=>{
    let configMail=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"duyp7484@gmail.com",
            pass:"yycxoaqywrvhtvsh"
        }
   })

   let infoMail={
    from:"duyp7484@gmail.com",
    to,
    subject,
    text
   }
   configMail.sendMail(infoMail,(err,info)=>{
    console.log(info);
   })
   return configMail.sendMail(infoMail,error=>error)
}