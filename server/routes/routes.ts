import express from 'express'
import {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
  getActiveTodos,
  getCompletedTodos,
  completeTodo,
  deleteCompletedTodos,
} from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const todos = await getTodos()
    res.json(todos)
  } catch (error) {
    if (error instanceof Error) res.status(500).send(error.message)
  }
})

router.post('/', async (req, res) => {
  try {
    const newTodo = req.body
    await addTodo(newTodo)
    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) res.status(500).send(error.message)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    await deleteTodo(Number(id))
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) res.status(500).send(error.message)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const editedTodo = req.body.task_details
    await updateTodo(id, editedTodo)
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) res.status(500).send(error.message)
  }
})

router.get('/active', async (req, res) => {
  try {
    const todos = await getActiveTodos()
    res.json(todos)
  } catch (error) {
    if (error instanceof Error) res.status(500).send(error.message)
  }
})

router.get('/completed', async (req, res) => {
  try {
    const todos = await getCompletedTodos()
    res.json(todos)
  } catch (error) {
    if (error instanceof Error) res.status(500).send(error.message)
  }
})

router.patch('/complete/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const complete = req.body.completed
    await completeTodo(id, complete)
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) res.status(500).send(error.message)
  }
})

router.delete('/', async (req, res) => {
  try {
    await deleteCompletedTodos()
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) res.status(500).send(error.message)
  }
})

export default router
