const mongoose = require('mongoose')
const db = require('../config/db')

const { Schema } = mongoose

const taskSchema = new Schema({
  // password:Array,
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  tasks: {
    type: [
      {
        title: {
          type: String,
          // lowercase: true,
          // unique: true,
          required: true
        },
        description: {
          type: String,
          required: true
        },
        status: {
          type: String,
          required: true
        },
      }
    ],
    required: true,
    default: []
  }
})

const TaskModel = mongoose.model('tasks', taskSchema)

module.exports = TaskModel
