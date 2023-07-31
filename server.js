const express=require('express');
const app=express();
require('dotenv').config();
app.use(express.urlencoded({extended:false}));
const adminRouter =require('./routers/adminrouter');
const frontendRouter =require('./routers/frontendRouter');
const mongoose=require('mongoose')
mongoose.connect(process.env.DB_URL+"/"+process.env.DB_NAME)



app.set('view engine','ejs')
app.use(express.static('public'));
app.use('/front',frontendRouter);
app.use(adminRouter);
app.listen(process.env.PORT,()=>{console.log('server is running')})