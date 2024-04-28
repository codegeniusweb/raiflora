const register=require('./register')
const loginUser=require('./login')
const current=require('./current')
const logoutUser=require('./logout')
const updateAvatar=require('./updateAvatar')
const verify = require("./verify");
const resendVerifyEmail=require('./resendVerifyEmail')
const google=require('./google')
module.exports={
    register,loginUser,current,logoutUser,updateAvatar,verify,resendVerifyEmail,google
}
