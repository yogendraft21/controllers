const Emp=require('../models/employee')
const nodemailer=require('nodemailer')

exports.employee_master_show=(req,res)=>{
  
    res.render('admin/empreg.ejs',{mess:''})
}
exports.empinsert=async(req,res)=>{
   const{empname,email,dept,mobile,designation,}=req.body
    const filename=req.file.filename
     
     var employeeid='API'+new Date().getTime()
     let password=new Date().getTime()+'pass';
     //console.log(employeeid,password)
     
     
    const record=new Emp({
        employeeName:empname,
        mobile:mobile,
        Email:email,
        Designation:designation,
        Department:dept,
        img:filename,
        empid:employeeid,
        emppass:password
    })
    record.save()
   // console.log(record)
   try{
    let testaccount=await nodemailer.createTestAccount();
     const transporter = nodemailer.createTransport({
       host: "smtp.gmail.com",
       port: 587,
       secure: false,
       auth: {
         user: 'apispartner7@gmail.com',
         pass: 'zogfokdtgfmteugl'
       }
     })

     console.log('connected')

const info = await transporter.sendMail({
 from: 'apispartner7@gmail.com', 
 to: email, 
 subject: "API PARTNER INFOTECH PVT LTD", 
 text: "", 
 html: `<b>You have successfully registred.EmployeeId:${employeeid}, password: ${password}</b>`, 
})
res.render('admin/empreg.ejs',{mess:"Successfully Registered"})
}catch(error){
res.send('Please check internet connectvity')
}

   
}

exports.empdata=async(req,res)=>{
    const record=await Emp.find()
    //console.log(record)
    res.render('admin/emplist.ejs',{record})
}