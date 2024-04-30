const {Category}=require('../../models/categoryModel')

const getAllCategories = async (req, res) => {
    const categories=await Category.find({},"-createdAt -updatedAt")
    res.json({items:categories,count:categories.length})
}

module.exports=getAllCategories