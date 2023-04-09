import mongoose from "mongoose"


export const connectDb =()=>{
    mongoose.connect( process.env.MONGO_URI, {
    dbName: "backendapi"
})
.then((c)=> console.log(`databse connected with ${c.connection.host}`))
.catch((err)=> console.log(err))

}