const router=require('express').Router();
const adminhomec=require('../controllers/adminhomecontroller')
const adminmemberregc=require('../controllers/adminmemberregcontroller')
const pendingc=require('../controllers/pendingmembercontroller')
const activec=require('../controllers/activemembercontroller')
const rejectc=require('../controllers/rejectmembercontroller')
const employeec=require('../controllers/empregcontroller')
const multer=require('multer')

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/upload')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname)
        }
})

const upload=multer({
    storage:storage,
    limits:{fileSize:1024*1024*2}
})
const multiupload=upload.fields([{name:"opanimg",maxCount:1},{name:"gstimage",maxCount:1},{name:"abimg",maxCount:1},{name:"payslip",maxCount:1},{name:"afimg",maxCount:1},{name:"cpanimg",maxCount:1},{name:"cinimg",maxCount:1},{name:"ownerimg",maxCount:1},{name:'sign',maxCount:1}])




router.get('/',adminhomec.adminhomeshow)
router.get('/memberregistraion',adminmemberregc.memberregistershow)
router.post('/memberregistraion',multiupload,adminmemberregc.memberinsert)
router.get('/pendingmember',pendingc.pendingmembers)
router.get('/activemember',activec.activemembers)
router.get('/toactive/:id',pendingc.toactive)
router.get('/toreject/:id',activec.toreject)
router.get('/rejectmembers',rejectc.rejectedmembers)
router.get('/updatereg/:id',adminmemberregc.regupdateshow)
router.post('/updatereg/:id',adminmemberregc.regupdate)
router.get('/dashboard',adminhomec.dashboard)
router.get('/employeereg',employeec.employee_master_show)
router.post('/employeereg',upload.single('img'),employeec.empinsert)
router.get('/employeelist',employeec.empdata)


module.exports=router;