const validateBody=require('./validateBody')
const isValidId=require('./isValidId')
const authenticate=require('./authenticate')
const upload=require('./upload')
const passport=require('./passport')
const checkUserRole=require('./checkUserRole')

module.exports={
    validateBody,isValidId,authenticate,upload,passport,checkUserRole
}