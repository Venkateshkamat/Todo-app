const express = require('express');
const {createTodo,updateTodo} = require('./types');
const {todo} = require('./db');

const app = express();

app.use(express.json());

app.post("/todo",async (req,res)=>{
    const payload  = req.body;
    const parsepayload  = createTodo.safeParse(payload);
    if(!parsepayload.success){
        res.status(411).json({
            msg:"Wrong inputs"
        })
        return
    }
    
    await todo.create({
        title: payload.title,
        description: payload.description,
        status: false
    })

    res.json({
        msg:"Todo created"
    })
    
})

app.get("/todos",async (req,res)=>{
    const todos = await todo.find();
    res.json({
        todos
    })
})

app.put("/completed",async (req,res)=>{
    const payload  = req.body;
    const parsepayload  = updateTodo.safeParse(payload);
    if(!parsepayload.success){
        res.status(411).json({
            msg:"Wrong inputs"
        })
        return
    }
    // const item = await todo.findOne({_id:req.params["id"]})
    await todo.updateOne({
        _id:payload.id
    },
    {
        status: true
    })

    res.json({
        msg:"Todo marked done"
    })

})
//global catch
app.use((err,req,res,next)=>{
    if(err){
        res.status(500).json({
            msg:"Caught by global catch",
            err:err
        })
    }
})

app.listen(3000,()=>{
    console.log("Server listening on 3000");
})