import type { FastifyReply } from 'fastify'

export function notFoundTask(id: string, reply: FastifyReply) {
  return reply.status(404).send({
    message: `No task found with id: ${id}`,
  })
}
