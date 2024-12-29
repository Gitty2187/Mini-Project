const express = require("express")
const router = express.Router()
const postController = require("../controllers/postsController")

router.get("/",postController.getList)
router.post("/",postController.addPost)
router.put("/",postController.updatePost)
router.delete("/:id",postController.deletePost)


module.exports = router