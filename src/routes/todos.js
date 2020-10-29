import { Router } from 'express'
import Todo from '@/models/Todo'

const router = Router()

router.get('/api/todos', async (_, res) => {
  const todos = await Todo.find({}).lean()
  res.send(todos)
})

export default router
