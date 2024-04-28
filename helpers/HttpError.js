const messages={
    400:"BAD REQUEST",
    401:"UNAUTHORIZED",
    403:"FORBIDDEN",
    404:"NOT FOUND",
    409:"CONFLICT",
}

const HttpError = (status, message=messages[status]) => {
    const error = new Error(message)
    error.status = status
    return error
}

module.exports=HttpError