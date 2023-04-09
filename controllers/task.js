import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/tasks.js";




export const newTask = async (req, res, next)=>{
     
try {
    const{title, description} = req.body;

    const task =  await Task.create({
        title,
        description,
        user: req.user
    })

    res.status(201).json({
        success: true,
        message: "Task added Successfully"
    })
    
} catch (error) {

    next(error)

}

}

export const getMyTask = async (req, res, next)=>{

    const userId = req.user._id
    const task = await Task.find({user : userId});

    res.status(200).json({
        success: true,
        message: "Found",
        task
    })
}

export const updateMyTask =  async (req, res, next)=>{
    try {
        const {id} = req.params;
        const task = await Task.findById(id);
     
        if(!task) return next(new ErrorHandler("Task not Found", 404))
     
        task.isCompleted = !task.isCompleted     
        await task.save();
     
        res.status(200).json({
         success: true,
         message: "Updated Successfully"
        })
    } catch (error) {
        next(error)
    }
}

export const deleteMyTask =  async (req, res, next)=>{
    
   try {
    const {id} = req.params;
    const task = await Task.findById(id);
       if(!task) return next(new ErrorHandler("Task not Found", 404))
        await task.deleteOne();
 
    res.status(200).json({
     success: true,
     message: "Deleted Successfully"
    })
   } catch (error) {
    next(error)
   }

}