const {Schema, model} = require('mongoose')
const {handleMongooseError,USER_ROLES} = require("../helpers");
const Joi = require("joi");

const categorySchema = new Schema({
    publicId:{
        type: String,
        required: true,
        unique: true
    },
    categoryImg:{
        type: String,
        required: true,
    },
    categoryName:{
        type: String,
        required: true,
        unique: true
    }
},{
    timestamps: true,
        versionKey: false,
})
categorySchema.post('save', handleMongooseError)

const add=Joi.object({
    categoryImg:Joi.string().required(),
    categoryName:Joi.string().required(),
})
const update=Joi.object({
    categoryImg:Joi.string(),
    categoryName:Joi.string(),
})

const Category = model('category', categorySchema)
const categorySchemas={add, update}
module.exports={
    Category,categorySchemas
}