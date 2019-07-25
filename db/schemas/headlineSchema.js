const {Schema, model} = require('mongoose')

const headlineSchema = new Schema({
    title: {
        type: String
    }
})

const Headline = model('Headline', headlineSchema)
module.exports = Headline
