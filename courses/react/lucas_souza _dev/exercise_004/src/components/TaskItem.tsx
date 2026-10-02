import { MdDelete } from 'react-icons/md'
import type { Task } from '../types/Task'
import { FaCheckSquare } from 'react-icons/fa'
import Button from './Button'

interface ITaskProps {
  task: Task
  onComplete(id: Task['id']): void
  onDelete(id: Task['id']): void
}

export default function TaskItem({
  task: { id, label, completed },
  onComplete,
  onDelete,
}: ITaskProps) {
  return (
    <>
      <span className={`${completed && 'line-through'} text-[1.1rem]`}>
        {label}
      </span>

      <Button
        onClick={() => onComplete(id)}
        aria-label={`Marcar '${label}' como concluída.`}
        variant={completed ? 'green' : 'purple'}
      >
        <FaCheckSquare />
      </Button>

      <Button
        onClick={() => onDelete(id)}
        aria-label={`Excluir tarefa: ${label}`}
        variant="red"
      >
        <MdDelete />
      </Button>
    </>
  )
}
