const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan("dev"))
app.use(express.json())
const port = 8888;

app.use((req, res, next) => {
    if(req.method==="PATCH"){

    }
    else if(req.method==="GET"){

    }
    else if(req.method==="POST"){
        
    }
    else if(req.method==="DELETE"){

    }

    next();
})

app.get("/user/:id",(req, res) => {
    console.log(req.params.id,req.query.name,req.body);
    if(!req.params.id || !req.query.name) { return  res.json({getid:false}); };
    return res.json({getid:true,  id:req.params.id, name:req.query.name});
})

app.post("/user",(req, res) => {
    console.log(req.body.id, req.body.password);
    if(!req.body.id || !req.body.password) { return  res.json({signup:false}); }
    return res.json({signu:true,id:req.body.id,password:req.body.password});
})

app.patch("/user/:id",(req, res) => {
    console.log(req.params.id,req.body);
    if(!req.body.name || !req.params.id) { return res.json({update:false});};
    return res.json({update:true,id:req.params.id,name:req.body.name})
})

app.delete("/user/:id",(req, res) => {
    console.log(req.params.id);
    if(!req.params.id) { return res.json({delete:false})};
    return res.json({delete:true,id:req.params.id})
})

app.listen(port,()=>{
    console.log(port);
})