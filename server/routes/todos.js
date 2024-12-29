const express = require("express")
const router = express.Router()
const todosController = require("../controllers/todosController")

router.get("/",todosController.getList)
router.post("/",todosController.addTask)
router.put("/",todosController.updateTask)
router.delete("/:id",todosController.deleteTask)
router.put("/:id",todosController.complete)

module.exports = router
