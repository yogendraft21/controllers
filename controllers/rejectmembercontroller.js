const Member=require('../models/member')

exports.rejectedmembers= async(req,res)=>{
    const record=await Member.find({accountstatus:"Reject"})
    res.render('admin/rejectmembers.ejs',{record})
}
