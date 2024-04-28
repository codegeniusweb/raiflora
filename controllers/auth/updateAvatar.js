const fs = require('fs/promises')
const path = require('path')
const {User} = require('../../models/userModel')
const avatarsDir = path.join(__dirname, '..', '..', 'public', 'avatars')

const updateAvatar = async (req, res) => {
    const {path: tempUpload, originalname} = req.file
    const {_id} = req.user
    const filename=`${_id}_${originalname}`
    const resultUpload = path.join(avatarsDir, filename)
    await fs.rename(tempUpload, resultUpload)
    const avatarUrl = path.join('avatars', filename)
    await User.findByIdAndUpdate(_id, {avatarUrl})
    res.json({
        avatarUrl
    })
}

module.exports = updateAvatar;