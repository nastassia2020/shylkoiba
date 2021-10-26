const {Schema, model, Types} = require('mongoose')
const Comment = require('../models/Comment')

const schema = new Schema({
    name: {type: String, required: true},
    singer: {type: String, required: true},
    path: {type: String, required: true},
    comments: [Comment.schema],
    clicks: {type: Number, default: 0},
    likes: {type: Number, default: 0}
})

module.exports = model('Song', schema)