import mongoose from "mongoose"

const videoSchema = mongoose.Schema({
    videoFile:{
        type:String,  //cloudinary url
        required: true,
        title: true,

    },
    thumbnail:{
        type: String,  //cloudinary url
        required: true,  
    },
    title:{
        type: String,
        required: true,  
    },
    description:{
        type: String,
        required: true,  
    },
    duration:{
        type: Number,
        default: true 
    },
    viwes:{
        type: Number,
        default:0
    },
    isPublished:{
        type: Boolean,
    }

},{timestamps: true})


export const Video = mongoose.model("Video", videoSchema)