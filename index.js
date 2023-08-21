const app = require('./app')
const db = require('./config/db')
const UserModel = require('./model/user.model')
const TaskService = require('./services/task.services')
// const TaskController = require('./controller/task.controller')

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!!!!')
})

app.get('/add', async (req, res) => {
  try {
    const { email, tasks } = req.body
    console.log('Here is me ')
    console.log(tasks['title'])

    const successRes = await TaskService.addTask(email, tasks)
    res.json({ status: true, success: 'Task Added Successfully' })
  } catch (e) {
    throw e
  }
})

app.get('/get', async (req, res) => {
  try {
    const { email } = req.body

    const successRes = await TaskService.getTasks(email)

    res.json({ status: true, email: successRes.email, tasks: successRes.tasks })
  } catch (e) {
    throw e
  }
})

app.get('/getTask', async (req, res) => {
  try {
    const { email, id } = req.body

    const successRes = await TaskService.getTask(email, id)

    res.json({
      status: true,
      email: successRes.email,
      task: successRes.task,
      id: successRes.id
    })
  } catch (e) {
    throw e
  }
})

app.get('/update', async (req, res) => {
  try {
    const { email, id, tasks } = req.body
    console.log(id)
    console.log(tasks['title'])

    const successRes = await TaskService.updateTasks(email, id, tasks)
    res.json({ status: true, success: 'Task Updated Successfully' })
  } catch (e) {
    throw e
  }
})

app.get('/completed', async (req, res) => {
  try {
    const { email, id } = req.body
  //   console.log(id)
  //   console.log(tasks['title'])

    const successRes = await TaskService.completeTask(email, id)
    res.json({ status: true, success: 'Task Status changed Successfully' })
  } catch (e) {
    throw e
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
