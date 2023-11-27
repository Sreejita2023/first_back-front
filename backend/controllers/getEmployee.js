const Employee=require('../models/employee')

exports.getEmployee=async(req,res)=>{
    try{
        const response=await Employee.find({})
        res.status(200).json({
            success:true,
            date:response,
            message:'entire data fetched'
        })
      }
      catch(err){
         console.error(err)
         console.log(err)
         res.status(500)
         .json({
            success:false,
            data:"internal server error",
            message:err.message,
         })
      }
}