const express = require('express')
const {ctrlWrapper, USER_ROLES} = require("../../helpers");
const {validateBody,checkUserRole} = require('./../../middlewares')
const {categorySchemas} = require("../../models/categoryModel");
const router = express.Router();
const ctrl=require("../../controllers/categories");
const {authenticate, upload, isValidPublicId} = require("../../middlewares");

//add new category
router.post('/',authenticate,checkUserRole(USER_ROLES.ADMIN),upload.single('categoryImg'),validateBody(categorySchemas.add),ctrlWrapper(ctrl.addCategory))

//get all
router.get('/',ctrlWrapper(ctrl.getAllCategories))

//get by publicId
router.get('/:publicId',isValidPublicId,ctrlWrapper(ctrl.getByPublicId))

//delete by publicId
router.delete("/:publicId",authenticate,isValidPublicId,checkUserRole(USER_ROLES.ADMIN),ctrlWrapper(ctrl.deleteByPublicId))

//update by publicId
router.put("/:publicId",authenticate,isValidPublicId,checkUserRole(USER_ROLES.ADMIN),upload.single('categoryImg'),validateBody(categorySchemas.update),ctrlWrapper(ctrl.updateByPublicId))

module.exports=router