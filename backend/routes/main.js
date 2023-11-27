const express=require("express")
const router=express.Router()
const {createEmployee}=require('../controllers/createEmployee')
const {getEmployee}=require('../controllers/getEmployee')

router.post('/createEmployee',createEmployee)
router.get('/getEmployee',getEmployee)
module.exports=router