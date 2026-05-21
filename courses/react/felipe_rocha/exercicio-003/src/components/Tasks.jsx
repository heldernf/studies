import { ChevronRightIcon, TrashIcon } from 'lucide-react'

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {Object.entries(tasks).map(([id, task]) => (
        <li key={id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
              task.isCompleted && 'line-through'
            }`}
          >
            <span className="text-black font-medium">{task.title}</span>
            <p>{task.description}</p>
          </button>

          <button className="bg-slate-400 text-white p-2 rounded-md">
            <ChevronRightIcon />
          </button>

          <button
            onClick={() => onDeleteTaskClick(id)}
            className="bg-slate-400 text-white p-2 rounded-md"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Tasks
