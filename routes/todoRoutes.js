const express = require('express')
const router = express.Router();
const TodoModel = require('../models/todos')
const TodoControler = require('../controler/todoControler')

  
 router.post('/todo',(req,res)=>{
    console.log('here is req',req.body);
    const todo = new TodoModel(req.body);
    todo.save()
    .then(result => console.log('dada'))
    .catch(err => console.log(err))
  })

  router.get('/todo',(req,res)=>{
    TodoModel.find()
    .then(result => {
    res.json(result)
    })
    .catch(err => console.log(err))
  })

  router.get('/todo/:id',TodoControler.getTodos)
  
  router.delete('/todo/:id',(req,res)=>{
    const id = req.params.id
    TodoModel.findByIdAndDelete(id)
    .then(result => {
      console.log('Here is delete result', result)
      res.json({redirectPath: '/'})
    })
    .catch(err => console.log(err))
  })
  

  
  router.put('/updateTodo',(req,res)=>{
    console.log('Update data', req.body)
    TodoModel.findOneAndUpdate({_id: req.body.id},req.body,{
      new: true
    })
    .then(result => res.redirect('/'))
    .catch(err => console.log(err))
  })

module.exports = router