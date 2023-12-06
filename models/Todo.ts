export type NewTodo = {
  task_details: string
  priority: number
  completed: boolean
}

export type Todo = NewTodo & { id: number }
