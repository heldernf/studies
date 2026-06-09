import { useEffect, useState } from 'react'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import Title from './components/Title'

function updateTasksInLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

async function fetchTasksFromAPI() {
  return await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3', {
    method: 'GET',
  }).then((res) => res.json())
}

function syncTasksFromAPI(setTasks) {
  async function _syncTasksFromAPI() {
    const apiTasks = await fetchTasksFromAPI()

    setTasks((prevTasks) => {
      const existingIDs = prevTasks.map((task) => task.id)

      const newTasks = apiTasks
        .filter((apiTask) => !existingIDs.includes(apiTask.id))
        .map(({ userId: _userId, ...newTask }) => {
          newTask.description = 'Lorem ipsum.'
          return newTask
        })

      return [...prevTasks, ...newTasks]
    })
  }

  _syncTasksFromAPI()
}

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || [],
  )

  useEffect(() => updateTasksInLocalStorage(tasks), [tasks])

  useEffect(() => syncTasksFromAPI(setTasks), [])

  function onAddTaskSubmit(title, description) {
    const newTaks = {
      id: crypto.randomUUID(),
      title,
      description,
      isCompleted: false,
    }

    setTasks([...tasks, newTaks])
  }

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id !== taskId) return task
      return { ...task, isCompleted: !task.isCompleted }
    })

    setTasks(newTasks)
  }

  function onDeleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId)

    setTasks(newTasks)
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title> Gerenciador de Tarefas </Title>

        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </div>
  )
}

export default App
