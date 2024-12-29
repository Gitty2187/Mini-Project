const User = require("../models/User")

const getList = async (req, res) => {
    const users = await User.find().lean()
    if (!users) {
        return res.status(404).send("No user found")
    }
    res.json(users)
}

const addUser = async (req, res) => {
    const { name, userName, email, adress, phone } = req.body
    if (!name || !userName) {
        return res.status(400).send("Must insert name & user name")
    }
    const user = await User.create({ name, userName, email, adress, phone })
    if (!user) {
        return res.status(400).send("Failes in create")
    }
    const users = await User.find().lean()
    return res.json(users)
}

const updateUser = async (req, res) => {
    const { _id, name, userName, email, adress, phone } = req.body
    if (!_id)
        return res.status(400).send("Must insert id")
    const user = await User.findById(_id).exec()
    if (!user)
        return res.status(400).send("User not found")
    if (name)
        user.name = name
    if (userName)
        user.userName = userName
    if (email)
        user.email = email
    if (adress)
        user.adress = adress
    if (phone)
        user.phone = phone
    const updateUser = await user.save()
    const users = await User.find().lean()
    res.json(users)
}

const deleteUser = async (req, res) => {
    const { id } = req.params
    if (!id)
        return res.status(400).send("Must insert id")
    const user = await User.findById(id).exec()
    if (!user)
        return res.status(400).send("User not found")
    const result = await user.deleteOne()
    const users = await User.find().lean()
    res.json(users)
}

module.exports = { getList, addUser, updateUser, deleteUser }

