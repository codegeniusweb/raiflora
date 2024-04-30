const {Category} = require("../../models/categoryModel");
const translitRusEng = require('translit-rus-eng')
const {nanoid} = require("nanoid");
const path = require("path");
const fs = require("fs/promises");
const categoriesDir = path.join(__dirname, '..', '..', 'public', 'categories')


const updateByPublicId = async (req, res) => {
    const {publicId} = req.params
    let {categoryImg} = req.body
    if (req.file) {
        const {path: tempUpload, originalname} = req.file
        const filename = `${nanoid()}_${originalname}`
        const resultUpload = path.join(categoriesDir, filename)
        await fs.rename(tempUpload, resultUpload)
        categoryImg = path.join('categories', filename)
    }

    const updated = await Category.findOneAndUpdate({publicId}, {
        ...req.body,
        categoryImg,
        publicId: translitRusEng(req.body.categoryName, {slug: true})
    }, {new: true})
    res.json(updated)
}

module.exports = updateByPublicId