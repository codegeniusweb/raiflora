const express = require('express')
const {ctrlWrapper} = require("../../helpers");
const {validateBody, isValidId} = require('./../../middlewares')
const {schemas} = require("../../models/userModel");
const router = express.Router();
const ctrl=require("../../controllers/auth");
const {authenticate, upload,passport} = require("../../middlewares");

// auth with google
/*router.get("/google",passport.authenticate("google",{
    scope: ["email","profile"]
}))*/

/*router.get("/google/callback",passport.authenticate("google",{
    session: false
}),ctrlWrapper(ctrl.google))*/

//signup
router.post("/register", validateBody(schemas.registerSchema),ctrlWrapper(ctrl.register))

//sign in
router.post("/login", validateBody(schemas.loginSchema),ctrlWrapper(ctrl.loginUser))

//get current user
router.get('/current',authenticate,ctrlWrapper(ctrl.current))

//logout
router.post("/logout", authenticate, ctrlWrapper(ctrl.logoutUser))

//verify
// router.get("/verify/:verificationCode", ctrlWrapper(ctrl.verify));

//verify again if not received verification code
// router.post("/verify/:verificationCode",validateBody(schemas.verifySchema), ctrlWrapper(ctrl.resendVerifyEmail));

//update avatar
// router.patch("/avatars",authenticate,upload.single('avatarURL'),validateBody(schemas.avatarSchema),ctrlWrapper(ctrl.updateAvatar))

module.exports=router