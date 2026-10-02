import { useState } from 'react'
import InputAdd from './components/InputAdd'
import TaskItem from './components/TaskItem'
import type { Task } from './types/Task'

export function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: crypto.randomUUID(), label: 'Fazer café', completed: false },
    { id: crypto.randomUUID(), label: 'Fazer almoço', completed: false },
    { id: crypto.randomUUID(), label: 'Fazer janta', completed: false },
  ])

  function handleAdd(label: Task['label']) {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: crypto.randomUUID(), label, completed: false },
    ])
  }

  function handleComplete(id: Task['id']) {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask.id === id
          ? { ...prevTask, completed: !prevTask.completed }
          : prevTask,
      ),
    )
  }

  function handleDelete(id: Task['id']) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  return (
    <div className="bg-[#131416] p-2 h-screen text-white">
      <InputAdd onAdd={handleAdd} />

      <ol className="mt-4">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2 items-center">
            <TaskItem
              task={task}
              onComplete={handleComplete}
              onDelete={handleDelete}
            />
          </li>
        ))}
      </ol>
    </div>
  )
}
