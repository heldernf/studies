import { notFoundTask } from '@/controllers/tasks/helpers.js'
import { taskStatus, type UpdateTaskSchema } from '@/schemas/tasks.js'
import { tasksService } from '@/services/tasks.js'
import type { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

const schema = z
  .object({
    name: z.string().min(3).optional(),
    status: z.enum(taskStatus).optional(),
  })
  .refine(({ name, status }) => status !== undefined || name !== undefined, {
    message:
      'At least one of the properties "status" or "name" must be provided.',
  })
  .transform(({ name, status }): UpdateTaskSchema => {
    const data: UpdateTaskSchema = {}

    if (name !== undefined) data.name = name
    if (status !== undefined) data.status = status

    return data
  }) satisfies z.ZodType<UpdateTaskSchema>

interface UpdateRoute {
  Params: {
    id: string
  }
  Body: UpdateTaskSchema
}

export async function updateTaskController(
  req: FastifyRequest<UpdateRoute>,
  reply: FastifyReply,
) {
  const { id } = req.params

  if (!(await tasksService.exists(id))) return notFoundTask(id, reply)

  const data = schema.parse(req.body)
  const task = await tasksService.update(id, data)
  return reply.status(200).send({ message: 'Task update successfully!', task })
}
