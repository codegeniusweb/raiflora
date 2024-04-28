const {User} = require('../../models/userModel');

const logout=async(req, res) => {
    const {_id:id} = req.user;
    await User.findByIdAndUpdate(id,{token:""});
    res.json({
        message:"Logged Out",
    });
}
module.exports=logout