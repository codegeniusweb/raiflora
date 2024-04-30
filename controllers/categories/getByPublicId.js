const {Category}=require('../../models/categoryModel')


const getByPublicId=async(req,res)=>{
    const {publicId}=req.params
    const category=await Category.findOne({publicId},"-createdAt -updatedAt")
    res.json(category)
}


module.exports=getByPublicId