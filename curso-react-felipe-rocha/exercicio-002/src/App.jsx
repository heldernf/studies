import { useState } from 'react'

import AddTask from './components/AddTasks'
import Tasks from './components/Tasks'

let highestTaskId = 0
function App() {
  const [tasks, setTasks] = useState({})

  function onAddNewTask(newTask) {
    if (newTask.title.trim() || newTask.description.trim()) {
      const taskId = ++highestTaskId

      newTask.title = !newTask.title ? `Tarefa-${taskId}` : newTask.title
      newTask.description = !newTask.description
        ? 'Sem descrição'
        : newTask.description
      newTask.isCompleted = false

      setTasks((prevTasks) => {
        return {
          ...prevTasks,
          [taskId]: newTask,
        }
      })
    }
  }

  function onTaskClick(taskId) {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [taskId]: {
        ...prevTasks[taskId],
        isCompleted: !prevTasks[taskId].isCompleted,
      },
    }))
  }

  function onDeleteTaskClick(taskId) {
    setTasks((prevTasks) => {
      if (taskId == highestTaskId) {
        const keys = Object.keys(prevTasks)
        highestTaskId = Number(keys[keys.length - 2]) || 0
      }

      const { [taskId]: removed, ...rest } = prevTasks
      return rest
    })
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-6">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>

        <div className="space-y-4">
          <AddTask onAddNewTask={onAddNewTask} />

          <Tasks
            tasks={tasks}
            onTaskClick={onTaskClick}
            onDeleteTaskClick={onDeleteTaskClick}
          />
        </div>
      </div>
    </div>
  )
}

export default App
