import express from 'express';
import dotenv from 'dotenv'
import userRouter from './Routes/user.js'    // export default that's why we can import with any name.
import taskRouter from './Routes/task.js' 
import cookieParser from 'cookie-parser';
import { errorMiddleWare } from './middlewares/error.js';
import cors from 'cors'


export const app = express();
const router = express.Router();


dotenv.config({
    path: "./data/config.env"
})



//Middlewares
app.use(cookieParser())    // to parse cookie
app.use(express.json())   // using middleware to access body data
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true      // headers (by setting this true we are sending headers)
}))
app.use("/api/v1/users",userRouter)  //using Routes
app.use("/api/v1/task", taskRouter);


router.get("/", (req, res)=>{
    res.send("Nice ")
})

app.use(errorMiddleWare)  // Using Error Middleware





