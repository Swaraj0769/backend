import express from "express"
import connectDB from "./db"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser)

// connectDB().then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//         console.log(`Server port: ${process.env.PORT}`);

//     })
// }).catch((error) => {
//     console.log("mongoDB connection failed!!!", error);
// })

export { app }