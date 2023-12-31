const express = require('express')
const body_parser = require('body-parser')
const userRouter = require('./router/user.router')
const taskRouter = require('./router/task.router')


const app = express()

app.use(body_parser.json())


app.use('/', taskRouter)
app.use('/', userRouter)


module.exports = app
