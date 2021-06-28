const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    cabinet: [{type: Types.ObjectId, ref: 'Link'}]
})

module.exports = model('User', schema)