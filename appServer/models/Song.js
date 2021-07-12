const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true},
    singer: {type: String, required: true},
    clicks: {type: Number, default: 0},
    likes: {type: Number, default: 0}
})

module.exports = model('Song', schema)