import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express";

const app = express()

const connectDB =async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongoDB connected || DB HOST:${connectionInstance.connection.host}`);

        app.on("error", () => {
                console.log("ERROR:", error);
                throw error
            })

        app.listen(process.env.PORT, () => {
                    console.log(`App is listening on port ${process.env.PORT}`);
                })
        
    } catch (error) {
        console.log("MONGO_DB connection FAILED", error);
        process.exit(1)
    }
}

export default connectDB