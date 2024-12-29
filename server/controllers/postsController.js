const Post = require("../models/Post")


const getList = async (req, res) => {
    const posts = await Post.find().lean()
    if (!posts) {
        return res.status(404).send("No post found")
    }
    res.json(posts)
}

const addPost = async (req, res) => {
    const { title, body } = req.body
    if (!title)
        return res.status(400).send("Must insert title")
    const post = await Post.create({ title, body })
    if (!post) {
        return res.status(400).send("Failes") 
    }
    const posts = await Post.find().lean()
    res.json(posts)
}

const updatePost = async (req, res) => {
    const { _id, title, body } = req.body
    if (!_id)
        return res.status(400).send("Must insert id")
    const post = await Post.findById(_id).exec()
    if (!post)
        return res.status(400).send("Post not found")
    if (title)
        post.title = title
    if (body)
        post.body = body
    const updatePost = await post.save()
    const posts = await Post.find().lean()
    res.json(posts)
}

const deletePost = async (req, res) => {
    const { id } = req.params
    if (!id)
        return res.status(400).send("Must insert id")
    const post = await Post.findById(id).exec()
    if (!post)
        return res.status(400).send("Post not found")
    const result = await post.deleteOne()
    {
        const posts = await Post.find().lean()
        res.json(posts)
    }
}

module.exports = { getList, addPost, updatePost, deletePost }
