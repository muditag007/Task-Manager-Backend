const mongoose = require('mongoose')

const connection = mongoose
  .createConnection('mongodb://0.0.0.0:27017/taskManager')
  .on('open', () => {
    console.log('MongoDB Connected')
  })
  .on('error', () => {
    console.log('MongoDB connection Error')
  })

module.exports = connection
