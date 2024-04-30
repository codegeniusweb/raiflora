const path = require("path");
const fs = require("fs/promises");
const {Category}=require('../../models/categoryModel')
const categoriesDir=path.join(__dirname, '..', '..', 'public', 'categories')
const {nanoid}=require('nanoid');
const translitRusEng=require('translit-rus-eng')

const addCategory = async (req,res) => {
    const {path: tempUpload, originalname} = req.file
    const filename=`${nanoid()}_${originalname}`
    const resultUpload = path.join(categoriesDir, filename)
    await fs.rename(tempUpload, resultUpload)
    const categoryImg = path.join('categories', filename)
    const {categoryName}=req.body
    const publicId=translitRusEng(categoryName,{slug:true})
    const createdCategory=await Category.create({...req.body,categoryImg,publicId})
    res.status(201).json({createdCategory})
}
module.exports=addCategory;