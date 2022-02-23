const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
//환경변수 관리
const app  = express();

dotenv.config();
const port = process.env.port || 3000;

app.set("port",port);
app.use(morgan("dev"));
app.use(express.json());

app.get("/user/:id",(req,res)=>{
    console.log(req.params.id,req.query.name,req.body);
    if(!req.params.id || !req.query.name) { 
        return  res.json({getid:false}); 
    }
    else{
        return res.json({
            getid:true,
            id:req.params.id,
            name:req.query.name
        });
    }
    
})
app.post("/user",(req,res)=>{
    console.log(req.body.id,req.body.password);
    if(!req.body.id || !req.body.password) { 
        return  res.json({signup:false}); 
    }
    else{
        return res.json({
            signup:true,
            id:req.body.id,
            password:req.body.password
        });
    }
    
})
app.patch("/user:id",(req,res)=>{
    console.log(req.params.id,req.body);
    if(!req.body.name || !req.params.id) { 
        return res.json({update:false});
    }
    else{
        return res.json({
            update : true,
            id:req.params.id,
            name:req.body.name
        });
    }
    
})
app.delete("/user:id",(req,res)=>{
    console.log(req.params.id);
    if(!req.params.id) { 
        return res.json({delete:false})
    }
    else{
        return res.json({
            delete:true,
            id : req.params.id  
        });
    }
    
})

app.listen(port,console.log(`이 서버는 ${port}에서 실행`));