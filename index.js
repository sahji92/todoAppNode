const express = require("express");
const mongoose = require("mongoose");
const TodoModel =require('./models/todos');

const app = express();
//connect to mongoDB
const dbURI =
  "mongodb+srv://sahdeepak330:learnbay123@cluster0.i6xvrvo.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURI)
.then((res) => {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));

  //setting view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({extended:true}))
//defining routes
app.get("/", (req, res) => {
  TodoModel.find()
  .then((result) => {
      res.render("index", {result});
    })
    .catch((err) => console.log(err));
});

app.post("/todo", (req, res) => {
  const todo = new TodoModel(req.body);
  todo.save()
  .then((result) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

app.listen(3000);
