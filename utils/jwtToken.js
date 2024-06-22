//creating token and saving in cookie
const sendToken=(user,statusCode,res)=>{
const token=user.getJwtToken()
  console.log(token);   
//option for cookie
      const options={
            expires:new Date(
               Date.now() + process.env.COOKIE_EXPIRE*24*60*60*1000),
               httpOnly:true,
           secure: process.env.NODE_ENV === 'production', 
               sameSite: 'None'

};
             
     res.status(statusCode).cookie('token',token,options).json({
         sucess:true,
         user,
         token,
     });
     return token; 
    
 }

 module.exports=sendToken;
