const statedata=require('./control.js');
const path=require('path');
const express=require('express');
const app=express();
//app.use(express.static(path.join(__dirname, '/browserside')));
app.get('/',(req,resp)=>{
    //console.log(__dirname);
    console.log("home");
    resp.sendFile(__dirname+'/front.html');
});
app.get('/state',(req,res)=>{
   var state_obj;
   statedata(req.query.state,(data)=>{
       state_obj=data;
      console.log(state_obj);
     res.send(state_obj);
   });
 //  console.log(state_obj)
});
app.listen(3000,()=>{
    console.log("app started at port 3000");
})