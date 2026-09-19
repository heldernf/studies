import type { CreateTaskSchema } from '@/schemas/tasks.js'
import { tasksService } from '@/services/tasks.js'
import type { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

const schema = z.object({
  name: z.string().min(3),
}) satisfies z.ZodType<CreateTaskSchema>

export async function createTaskController(req: FastifyRequest, reply: FastifyReply) {
  const data = schema.parse(req.body)

  const task = await tasksService.create(data)
  return reply.status(201).send({
    message: 'Task created successfully!',
    task,
  })
}
