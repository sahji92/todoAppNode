const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const todoSchema=new Schema({
    todo:{
        type:String,
        required:true
    }
},{timestamps:true})
const TodoModel=mongoose.model('TodoModel',todoSchema)
module.exports=TodoModel