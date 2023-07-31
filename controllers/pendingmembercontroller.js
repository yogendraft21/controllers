const Member=require('../models/member')

exports.pendingmembers=async(req,res)=>{
try{
const record=await Member.find({accountstatus:"Pending"})
res.render('admin/pendingmembers.ejs',{record})
}catch(error){

}
};


exports.toactive=async(req,res)=>{
   const {id}=req.params

   await Member.findByIdAndUpdate(id,{accountstatus:"Active"})
   res.redirect('/activemember')
}


