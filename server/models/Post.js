const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const postSchema = Schema({
    title: String,
    preacher:String,
    coire: String,
    worshipteam: String,
    selectedFiles: [String],
    message: String,
    likes: {
        type: [String],
        default: []
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
})

const Post = model('Post', postSchema);

module.exports = Post;