// const asyncHandler = ()=>{}
// const asyncHandler =(function)=> ()=>{}

const asyncHandler =(requestHadler)=> {(req,res, next)=>{
    Promise.resolve(requestHadler(req,res, next))
    .catch((error) => next(error))
}}

