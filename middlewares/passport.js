// const {Strategy} = require('passport-google-oauth2')
// const passport = require('passport')
// const gravatar = require('gravatar');
// const{nanoid}=require('nanoid')
// const bcrypt=require('bcrypt')
// const {User} = require('../models/userModel')
// const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET_KEY, BASE_API_URL, PORT} = process.env
//
//
// const googleParams = {
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET_KEY,
//     callbackURL: `${BASE_API_URL}:${PORT}/api/auth/google/callback`,
//     passReqToCallbackUrl: true
// }
//
// const googleCallback = async (req, accessToken, refreshToken, profile, done) => {
//     try {
//         const {email, displayName} = profile
//         const user = await User.findOne({email})
//         if (user){
//             done(null, user)
//         }
//         const password=nanoid()
//         const hashPassword=await bcrypt.hash(password, 10)
//         const avatarURL=gravatar.url(email)
//         const newUser=await User.create({email,name:displayName,password:hashPassword,avatarURL,verify:true,verificationCode:""})
//         done(null, newUser)
//     } catch (err) {
//         done(err,false)
//     }
// }
//
// const googleStrategy = new Strategy(googleParams, googleCallback)
//
// passport.use("google", googleStrategy)
//
// module.exports = passport
module.exports=null