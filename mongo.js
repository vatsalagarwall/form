const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/react-form')
    .then(() => {
        console.log("Mongoose connected")
    })
    .catch(() => {
        console.log("Failed to connect")
    })

const newSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

const collection = mongoose.model("collection", newSchema)

module.exports = collection