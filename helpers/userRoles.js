const USER_ROLES =Object.freeze(
    {
        ADMIN:"ADMIN",
        USER:"USER",
        getAllRoles: () => ["ADMIN","USER"],
    }
)
module.exports=USER_ROLES