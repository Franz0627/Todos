const {
    addTodo,
    getAllTodo,
    getTodo,
    updateTodo,
    deleteTodo,
} = require("../model/todo.model");

module.exports = (app) => {
    let routes = require("express").Router();

    routes.post("/addTodo", async(req, res) => {
        try {
            let todo = await addTodo(req.body);
            return res.send({
                status: "success",
                message: "Todo added Successfully",
                result: todo,
            });
        } catch (error) {
            return res.send({
                status: "failed",
                message: error.message,
                result: error,
            });
        }
    });

    routes.get("/getAllTodo", async(req, res) => {
        try {
            let todo = await getAllTodo();
            return res.send({
                status: "success",
                message: "Todo fetched",
                result: todo,
            });
        } catch (error) {
            return res.send({
                status: "failed",
                message: error.message,
                result: error,
            });
        }
    })

    routes.post("/updateTodo/:id", async(req, res) => {
        try {
            let id = req.params.id
            let todo = await updateTodo(id, req.body);
            return res.send({
                status: "success",
                message: "Todo Successfully Updated",
                result: todo,
            });
        } catch (error) {
            return res.send({
                status: "failed",
                message: error.message,
                result: error,
            });
        }
    })

    routes.post("/deleteTodo", async(req, res) =>{
        try {
            let id = req.body.id
            let todo = await deleteTodo(id);
            return res.send({
                status: "success",
                message: "Todo Successfully Deleted",
            });
        } catch (error) {
            return res.send({
                status: "failed",
                message: error.message,
            });
        }
    })

    routes.get("/getTodo", async(req, res) => {
        try {
            let id = req.body.id
            let todo = await getTodo(id);
            return res.send({
                status: "success",
                message: "Todo fetched",
                result: todo,
            });
        } catch (error) {
            return res.send({
                status: "failed",
                message: error.message,
                result: error,
            });
        }
    })

    return routes;
}