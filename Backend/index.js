const express = require('express');
const {createTodo,updateTodo} = require('./types');

const app = exress();

app.use(express.json());

app.post("/todo",(req,res)=>{
    const payload  = req.body;
    const parsepayload  = createTodo.safeParse(payload);
    if(!parsepayload.success){
        res.status(411).json({
            msg:"Wrong inputs"
        })
        return
    }
    // else{

    // }
})

app.get("/todos",(req,res)=>{
    
})

app.put("/completed",(req,res)=>{
    const payload  = req.body;
    const parsepayload  = updateTodo.safeParse(payload);
    if(!parsepayload.success){
        res.status(411).json({
            msg:"Wrong inputs"
        })
        return
    }
    // else{

    // }
})

app.use((err,req,res,next)=>{
    if(err){
        res.json({
            msg:"Caught by global catch",
            err:err
        })
    }
})