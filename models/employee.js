const mongoose=require('mongoose')






const employeeSchema=mongoose.Schema({
employeeName:String,
mobile:Number,
Email:String,
Designation:String,
Department:String,
img:String,
empid:String,
emppass:String
})


module.exports=mongoose.model('employee',employeeSchema)