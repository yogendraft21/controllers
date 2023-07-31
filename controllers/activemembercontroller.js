const Member=require('../models/member')

exports.activemembers=async(req,res)=>{
try{
const record=await Member.find({accountstatus:"Active"})
res.render('admin/activemembers.ejs',{record})
}catch(error){

}
}

exports.toreject=async(req,res)=>{
    const {id}=req.params
    
    await Member.findByIdAndUpdate(id,{accountstatus:"Reject"})
    res.redirect('/rejectmembers')
}

