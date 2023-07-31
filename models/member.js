const mongoose=require('mongoose')






const memberSchema=mongoose.Schema({
  companyType:String,
  companyName:String,
  ownerName:String,
  ownerAadharNumber:Number,
  ownerPanNumber:String,
  CinNumber:String,
  companyPanNumber:String,
  gstNumber:String,
  owneradd:String,
  companyadd:String,
  bankAcNumber:String,
  accountHolderName:String,
  bankName:String,
  ifscCode:String,
  acType:String,
  serviceAsign:String,
  aadharFrontImg:String,
  aadharBackImg:String,
  ownerPanImg:String,
  ownerimg:String,
  signatureimg:String,
  companyPan:String,
  gstImage:String,
  cinImage:String,
  paySlip:String,
  mobile:Number,
  domain:String,
  ip:String,
  email:String,
  contrycode:String,
  username:{
    type:String,
  },
  password:{
    type:String,
  },
  accountstatus:{
    type:String,
    default:"Pending"
  }
})


module.exports=mongoose.model('member',memberSchema)