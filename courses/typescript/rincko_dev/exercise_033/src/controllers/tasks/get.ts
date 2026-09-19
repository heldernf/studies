import { notFoundTask } from '@/controllers/tasks/helpers.js'
import { tasksService } from '@/services/tasks.js'
import type { FastifyReply, FastifyRequest } from 'fastify'

export async function getAllTaskController(
  _: FastifyRequest,
  reply: FastifyReply,
) {
  const tasks = await tasksService.getAll()
  return reply.status(200).send({
    message: `Tasks: ${tasks.length}`,
    tasks,
  })
}

interface GetByIdRoute {
  Params: {
    id: string
  }
}

export async function getTaskByIdController(
  req: FastifyRequest<GetByIdRoute>,
  reply: FastifyReply,
) {
  const { id } = req.params
  const task = await tasksService.getById(id)

  if (!task) return notFoundTask(id, reply)

  return reply.status(200).send(task)
}
