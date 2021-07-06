const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    path: {type: String, default: ''},
    clicks: {type: Number, default: 0},
    likes: {type: Number, default: 0},
    user: {type: Types.ObjectId, ref: 'User'},
    parent: {type: Types.ObjectId, ref: 'File'},
    child: [{type: Types.ObjectId, ref: 'File'}]
})

module.exports = model('File', schema)