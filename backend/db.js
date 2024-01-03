const mongo = require('mongoose');

mongo.connect("mongodb+srv://admin:differentpassword@cluster0.sj6zhoc.mongodb.net/todo-app")

const todoSchema = mongo.Schema({
    title: String,
    description:String,
    status: Boolean
})

const todo = mongo.model("todos",todoSchema);

module.exports = {
    todo:todo
}


