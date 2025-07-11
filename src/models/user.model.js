import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    usrename:{
        type : String,
        required: true,
        lowercase:true,
        unique: true,
        
    },
    email:{
        type: String, 
        required: true,
        lowercase: true,
        unique: true
    },
    fullName:{
        type: String,
        required: true,

    },
    avatar:{
        type: String,
        required: true
    },
    coverImage:{
        type:String,

    },
    password:{
        type: String, 
        required: true
    },
    refreshToken:{
        type: String, 
        required: true
    },

},{timestamps: true})


export const Users = mongoose.model("User", userSchema)