const Employee=require('../models/employee')

exports.createEmployee=async(req,res)=>{
      try{
        const{name,email,department,role}=req.body
        if (!name || !email  || !role || !department) {
         console.log("not all fields...");
         return res.status(400).json({
           status: 400,
           message: "Please fill all fields",
         });
       }
        const response=await Employee.create({name,email,department,role})
        res.status(200).json({
            success:true,
            date:response,
            message:'entry created successfully'
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