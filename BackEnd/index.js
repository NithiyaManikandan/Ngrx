const express =require('express')
var userRoute = require('./routes/user.route')
var app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ngrx',(err)=>{
    if(!err){
        console.log("Mongodb connection succeded.");
    }
    else{
        console.log("Error in DB connection :"+JSON.stringify(err,undefined,2))
    }
});

app.use(bodyParser.json())
app.use(cors())
app.use('/user',userRoute)
app.listen(3000,()=>{
    console.log('server started at port :3000');
})