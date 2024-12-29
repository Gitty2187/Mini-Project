const Todo = require("../models/Todo")


const getList = async (req, res) => {
    const todos = await Todo.find().lean()
    if (!todos) {
        return res.status(404).send("No task found")
    }
    res.json(todos)
}

const addTask = async (req, res) => {
    const { title, tags, completed } = req.body
    if (!title)
        return res.status(400).send("Must insert title")
    const task = await Todo.create({ title, tags, completed })
    if (!task) {
        return res.status(400).send("Failes")
    }
    const tasks = await Todo.find().lean()
    res.json(tasks)
}

const updateTask = async (req, res) => {
    const { _id, title, tags } = req.body
    if (!_id)
        return res.status(402).send("Must insert id")
    const task = await Todo.findById(_id).exec()
    if (!task)
        return res.status(404).send("Task not found")
    if (title != null) { task.title = title }
    if (tags != null) { task.tags = tags }
    const updateTask = await task.save()
    const tasks = await Todo.find().lean()
    res.json(tasks)
}

const deleteTask = async (req, res) => {
    const { id } = req.params
    if (!id)
        return res.status(400).send("Must insert id")
    const task = await Todo.findById(id).exec()
    if (!task)
        return res.status(400).send("Task not found")
    const result = await task.deleteOne()
    const tasks = await Todo.find().lean()
    res.json(tasks)
}

const complete = async (req, res) => {
    const { id } = req.params
    if (!id) {
        return res.status(400).send("Must insert id")
    }
    const task = await Todo.findById(id).exec()
    if (!task)
        return res.status(400).send("Task not found")
    if (task.completed) { task.completed = false }
    else { task.completed = true }
    const updateTask = await task.save()
    const tasks = await Todo.find().lean()
    res.json(tasks)
}

module.exports = { getList, addTask, updateTask, deleteTask, complete }//,complete}