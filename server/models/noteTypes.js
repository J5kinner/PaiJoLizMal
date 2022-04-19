const mongoose = require('mongoose')
require('dotenv').config()
const url = process.env.MONGODB_URI

console.log('connecting to', url)
                                          
mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const noteTypeSchema = new mongoose.Schema({
  background: String,
  cost: Number,
  time: Number,
})

noteTypeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('NoteType', noteTypeSchema)