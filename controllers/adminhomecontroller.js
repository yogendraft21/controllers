

exports.adminhomeshow=(req,res)=>{
    console.log("admin called")
    res.render('admin/adminhome.ejs')
}
exports.dashboard=(req,res)=>{
    console.log("admin called")
    res.render('admin/admindashboard.ejs')
}