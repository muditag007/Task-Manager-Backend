const mongoose = require('mongoose')

// const connection = mongoose
//   .createConnection('mongodb://127.0.0.1:27017/taskManager')
//   .on('open', () => {
//     console.log('MongoDB Connected')
//   })
//   .on('error', () => {
//     console.log('MongoDB connection Error')
//   })

const connection = mongoose.connect(
  'mongodb+srv://muditag007:testingpassword@testing.qnxwvha.mongodb.net/?retryWrites=true&w=majority',
  () => console.log('Connected!!')
)

module.exports = connection
