const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const todoRoutes = require('./routes/todoRoutes')
const TodoModel = require('./models/todos')
var cors = require('cors')

// Initializing an express app
const app = express()

app.use(cors())

//connect to mongodb

const dbURI = 'mongodb+srv://nav-learnbay:Learnbay123@cluster0.7dpm4tf.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then((res)=>{
  console.log('connected to db')
})
.catch(err=>console.log(err))

app.set('view engine','ejs')
app.set('views', './views');


app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded())

app.get('/',(req,res)=>{
  TodoModel.find()
  .then(result => {
  res.render('index',{result})
  })
  .catch(err => console.log(err))
})

app.use(todoRoutes)


// Listening to port
app.listen(3000);