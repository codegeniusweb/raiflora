const {Category}=require('../../models/categoryModel')


const deleteByPublicId = async (req,res) => {
    const {publicId}=req.params
    const deleted = await Category.findOneAndDelete({publicId})
    res.json(deleted)
}

module.exports=deleteByPublicId