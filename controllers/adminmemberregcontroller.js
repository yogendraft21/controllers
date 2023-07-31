const Member = require('../models/member')
var ccode = require('../contrycode/contrycode')
var contrycodes = ccode.module;
const nodemailer = require('nodemailer')



exports.memberregistershow = (req, res) => {
  res.render('admin/memberregistraion.ejs', { contrycodes })
}
exports.memberinsert = async (req, res) => {
  const { ctype, owneraadharn, companypann, companyadd, service, companyname, ownerpann, accountholdername, gstn, acnumber, ifsccode,
    ownername, cinnumber, bankname, owneradd, actype, mobile, domain, ip, email, contrycode } = req.body
  //console.log(req.body)
  //console.log(req.files)

  const files = req.files
  const ownerpanimg = files.opanimg.map(obj => obj.filename).toString()
  const gstimage = files.gstimage.map(obj => obj.filename).toString()
  const aadharfrontimg = files.afimg.map(obj => obj.filename).toString()
  const cpanimg = files.cpanimg.map(obj => obj.filename).toString()
  const cinimg = files.cinimg.map(obj => obj.filename).toString()
  const aadharbackimg = files.abimg.map(obj => obj.filename).toString()
  const payslipimg = files.payslip.map(obj => obj.filename).toString()
  const ownerimg = files.ownerimg.map(obj => obj.filename).toString()
  const sign = files.sign.map(obj => obj.filename).toString()


  let username = "APIS" + new Date().getTime()

  //console.log(username)



  function gpass() {
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let pass = '';
    for (let i = 0; i < 10; i++) {
      pass += Math.floor(Math.random() * 100000);
      pass += char.charAt(Math.floor(Math.random() * char.length));
      return pass
    }
  }
  const randompass = gpass()



  //console.log(ownerpanimg,gstimage,gstimage,aadharbackimg,aadharfrontimg,cpanimg,cinimg,payslipimg)
  const record = await new Member({
    companyType: ctype, companyName: companyname, ownerName: ownername, ownerAadharNumber: owneraadharn, ownerPanNumber: ownerpann,
    CinNumber: cinnumber, companyPanNumber: companypann, gstNumber: gstn, owneradd: owneradd, companyadd: companyadd, bankAcNumber: acnumber,
    accountHolderName: accountholdername, bankName: bankname, ifscCode: ifsccode, acType: actype, serviceAsign: service, aadharFrontImg: aadharfrontimg,
    aadharBackImg: aadharbackimg, ownerPanImg: ownerpanimg, companyPan: cpanimg, gstImage: gstimage, cinImage: cinimg, paySlip: payslipimg, mobile: mobile, domain: domain, ip: ip,
    email: email, contrycode: contrycode, ownerimg: ownerimg, signatureimg: sign, username: username, password: randompass
  })
  //console.log(record)
  record.save()
  try {
    let testaccount = await nodemailer.createTestAccount();
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
      html: `<b>You have successfully registred.Your account is pendding yet! username:${username}, password: ${randompass}</b>`,
    })
    console.log('sent')
    res.render('admin/memberregistraion.ejs', { contrycodes })
  } catch (error) {
    res.send('Please check internet connectvity')
  }
}

exports.regupdateshow = async (req, res) => {
  const id = req.params.id
  try {
    const record = await Member.findById(id)
    res.render('admin/regupdate.ejs', { contrycodes, record })
  } catch (error) {
    console.log(error)
  }
}

exports.regupdate = async (req, res) => {
  const id = req.params.id
  //console.log(id)
  //console.log(req.body)
  const { ctype, owneraadharn, companypann, companyadd, service, companyname, ownerpann, accountholdername, gstn, acnumber, ifsccode,
    ownername, cinnumber, bankname, owneradd, actype, mobile, domain, ip, email, contrycode } = req.body
  try {
    await Member.findByIdAndUpdate(id, {
      companyType: ctype, companyName: companyname, ownerName: ownername, ownerAadharNumber: owneraadharn, ownerPanNumber: ownerpann,
      CinNumber: cinnumber, companyPanNumber: companypann, gstNumber: gstn, owneradd: owneradd, companyadd: companyadd, bankAcNumber: acnumber,
      accountHolderName: accountholdername, bankName: bankname, ifscCode: ifsccode, acType: actype, serviceAsign: service,
      mobile: mobile, domain: domain, ip: ip, email: email, contrycode: contrycode
    })
    res.send('successfully update')
  } catch (error) {
    console.log('aa')
  }
}