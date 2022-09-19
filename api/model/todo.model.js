const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
},
    {
      timestamps: true,
      toJSON: {
        virtuals: true,
      },
      toObject: {
        virtuals: true,
      },
});

const Todo = mongoose.model("TODO", todoSchema);

const addTodo = async(data) => {
    try {
        let res = await Todo.create({
            name: data.name
        });
        return res;
    } catch (error) {
        console.log(error);
    }
}

const getAllTodo = async ()=> {
    try {
        let res = await Todo.find();
        return res;
    } catch (error) {
        console.log(error);
    }
}

const getTodo = async (id) => {
    try {
        let res = await Todo.findById(id);
        return res;
    } catch (error) {
        console.log(error);
    }
}

const updateTodo = async (id, data) => {
    try {
        let res = await Todo.findByIdAndUpdate(id, data);
        return res;
    } catch (error) {
        console.log(error);
    }
}

const deleteTodo = async (id) => {
    try {
        let res = await Todo.findByIdAndDelete(id);
        return res;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addTodo,
    getAllTodo,
    getTodo,
    updateTodo,
    deleteTodo,
}

