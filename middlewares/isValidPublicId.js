const {HttpError} = require("../helpers");
const {Category}=require('../models/categoryModel')


const isValidPublicId = async (req, res, next) => {
    const {publicId}=req.params
    const isValidPublic = await Category.findOne({publicId})
    if(!isValidPublic) {
        next(HttpError(404,`Invalid id ${publicId}`))
    }
    next()
}


module.exports=isValidPublicId;