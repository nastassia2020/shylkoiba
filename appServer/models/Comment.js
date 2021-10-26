const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    text: {type: String}
})

module.exports = model('Comment', schema)