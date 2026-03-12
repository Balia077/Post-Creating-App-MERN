const mongoose = require('mongoose');


const postShema = new mongoose.Schema({
    image: String,
    caption: String,
})

const postModel = mongoose.model("post", postShema)

module.exports = postModel;