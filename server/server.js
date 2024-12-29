require("dotenv").config()
const express = require("express")
const cors = require("cors")
const corsOptions = require("./config/corsOptions.js")
const connectDB = require("./config/dbConn")
const mongoose = require('mongoose')


const PORT = process.env.PORT || 8000
const app = express()
connectDB()


app.use(cors(corsOptions))
app.use(express.json())
app.use("/user",require("./routes/user.js"))
app.use("/post",require("./routes/post.js"))
app.use("/todo",require("./routes/todos.js"))

app.get("/", (req, res) => {
    res.send("this is the home page")
})



mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port
    ${PORT}`))
})
mongoose.connection.on('error', err => {
    console.log(err)
})