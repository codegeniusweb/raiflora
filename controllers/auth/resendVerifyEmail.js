const {User} = require("./../../models/userModel");
const {HttpError,sendEmail} = require("../../helpers");
const {BASE_API_URL,PORT}=process.env;

const resendVerifyEmail=async (req,res)=>{
    const {email} = req.body;
    const user= await User.findOne({email})
    if(!user || user.verify){
        throw HttpError(404,'User not found')
    }

    await User.findOneAndUpdate({email},{...user,verificationCode})
    await sendEmail({
        to:user.email,
        subject:"Verify your email",
        html:`<a target="_blank" href="${BASE_API_URL}:${PORT}/api/auth/verify/${user.verificationCode}">Click to verify your email</a>`
    })

    res.json({
        message:"Verification code was send successfully",
    })
}

module.exports=resendVerifyEmail