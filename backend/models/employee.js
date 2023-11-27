const mongoose=require ('mongoose')
const employeeSchema=new mongoose.Schema(
   {
    name:{
        type:String,
        required:true,
        maxLength:50,
    },
    email:{
        type:String,
        required:true,
        maxLength:50,
    },
    department:{
        type:String,
        required:true,
        maxLength:50,
    },
    role:{
        type:String,
        required:true,
        maxLength:50,
    }
   }
)
module.exports=mongoose.model("Employee",employeeSchema)