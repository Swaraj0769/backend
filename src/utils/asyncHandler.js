// const asyncHandler = ()=>{}
// const asyncHandler =(function)=> ()=>{}

const asyncHandler = (requestHadler) => {
    return (req, res, next) => {
        Promise.resolve(requestHadler(req, res, next))
            .catch((error) => next(error))
    }
}

export { asyncHandler }