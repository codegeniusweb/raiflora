const {HttpError, USER_ROLES} = require("../helpers");


const checkUserRole = (permissionRole)=> (req, res, next) => {
    /*const {_id,role}=req.user
    const {id}=req.params
    if(_id.toString()===id || role===USER_ROLES.ADMIN) return next()
    next(HttpError(403, 'User has not permission '))*/
    const {role}=req.user
    if(permissionRole===role) return next()
    next(HttpError(403, 'User has not permission '))
}

module.exports=checkUserRole;