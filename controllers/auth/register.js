const {User} = require("./../../models/userModel");
const {HttpError,sendEmail} = require("../../helpers");
const bcrypt=require('bcrypt')
const gravatar = require('gravatar');
const {nanoid} = require('nanoid');
const {BASE_API_URL,PORT}=process.env;

const register = async (req, res) => {
    const {name, email, password} = req.body;
    const user=await User.findOne({email})
    if(user){
        throw HttpError(409,"Email already in use");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL=gravatar.url(email)
    const verificationCode=nanoid()
    const newUser=await User.create({...req.body,password:hashPassword,avatarURL,verificationCode})
    // to verify email
    // const verifyEmail={
    //     to:newUser.email,
    //     subject:"Verify your email",
    //     html:`<a target="_blank" href="${BASE_API_URL}:${PORT}/api/auth/verify/${verificationCode}">Click to verify your email</a>`
    // }
    // await sendEmail(verifyEmail)
    res.status(201).json({
        name:newUser.name,
        email:newUser.email,
        avatarURL:newUser.avatarURL,
    })
}
module.exports=register