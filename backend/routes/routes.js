const { json } = require('express')
const express = require('express')
const Task = require('../models/todoSchema')
const router = express.Router()

router.get('/', (req,res) => {
   Task.find((err,data) => {
       if(err) console.log(err);
       res.json(data)
     })
})
router.get('/:id', (req,res) => {
    Task.findById(req.params.id ,(err,data) => {
        if(err) console.log(err);
        res.json(data)
      })
 })
router.post('/',(req,res) => {
    const task =new Task(req.body)
    task.save((err,data)=> {
         if(err) console.log(err);
         res.json(data)
    })    
})
router.put('/:id',(req,res) =>{
    Task.findOneAndUpdate({
        _id:req.params.id
    },req.body,{
        new : true
    },(err,data) =>{
        if(err) console.log(err);
        res.json(data)
    })
})
router.delete('/:id',(req,res) =>{
    Task.findByIdAndDelete(req.params.id , (err,data) =>{
        if(err) console.log(err);
        res.json(data)
    })
})
module.exports = router