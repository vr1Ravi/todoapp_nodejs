import mongoose from "mongoose"


export const connectDb =()=>{
    mongoose.connect( process.env.MONGO_URI, {
    dbName: "backendapi"
})
.then(()=> console.log("databse connected"))
.catch((err)=> console.log(err))

}