const Message = require("../models/Message")

exports.getIndex = async (req, res) => {
    res.render("index")
}

exports.newMessage = async (req, res) => {
    const message = await Message.create(req.body)
    res.redirect('/')
}