const {User} = require("./../../models/userModel");
const {HttpError} = require("../../helpers");


const verify=async (req,res)=>{
    const {verificationCode}=req.params;
    const user=await User.findOne({verificationCode})
    if (!user){
        throw HttpError(404,'User does not exist');
    }
    await User.findByIdAndUpdate(user._id,{verify: true,verificationCode: ""})
    return res.json({
        message: "User verification was updated successfully",
    });
}

module.exports=verify