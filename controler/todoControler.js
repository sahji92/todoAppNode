const TodoModel = require('../models/todos')

const getTodos = (req,res)=>{
    const id = req.params.id
    console.log(id)
    TodoModel.findById(id)
    .then(result => {
      console.log('Here is result', result)
      res.render('todo',{result})
    })
    .catch(err => console.log(err))
  }

module.exports = {
    getTodos
}