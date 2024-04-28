const {Schema, model} = require('mongoose')
const {handleMongooseError} = require("../helpers");
const Joi = require("joi");
const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        match:emailRegex,
        unique:true
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
    },
    avatarURL:{
        type: String,
        required:true
    },
    token:{
        type: String,
    },
    verify:{
        type:Boolean,
        default:false
    },
    verificationCode:{
        type: String,
    },
    phoneNumber:{
        type: String,
        required: true,
    }
},{
    timestamps: true,
    versionKey: false,
})

userSchema.post('save', handleMongooseError)

const registerSchema=Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegex).required(),
    password: Joi.string().min(6).required(),
    avatarURL: Joi.string(),
    phoneNumber:Joi.string().required()
})
const loginSchema=Joi.object({
    email: Joi.string().pattern(emailRegex).required(),
    password: Joi.string().min(6).required()
})
const avatarSchema=Joi.object({
    avatarURL: Joi.string()
})
const verifySchema=Joi.object({
    email: Joi.string().pattern(emailRegex).required(),
})
const schemas={loginSchema,registerSchema,avatarSchema,verifySchema}

const User = model('user', userSchema)

module.exports={
    User,schemas
}
