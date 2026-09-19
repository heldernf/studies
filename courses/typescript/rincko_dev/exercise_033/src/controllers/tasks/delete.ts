import { notFoundTask } from '@/controllers/tasks/helpers.js'
import { tasksService } from '@/services/tasks.js'
import type { FastifyReply, FastifyRequest } from 'fastify'

interface DeleteRoute {
  Params: {
    id: string
  }
}

export async function deleteTaskController(
  req: FastifyRequest<DeleteRoute>,
  reply: FastifyReply,
) {
  const { id } = req.params

  if (!(await tasksService.exists(id))) return notFoundTask(id, reply)

  await tasksService.delete(id)
  reply.status(200).send({
    message: 'Task deleted successfully!',
  })
}
