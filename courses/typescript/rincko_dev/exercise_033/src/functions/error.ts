import type { FastifyError, FastifyReply, FastifyRequest } from 'fastify'
import { ZodError } from 'zod'

export function errorHandler(
  error: FastifyError,
  _: FastifyRequest,
  reply: FastifyReply,
) {
  if (error instanceof ZodError) {
    const errors = error.issues.map((issue) => ({
      path: issue.path.join('.'),
      message: issue.message,
    }))

    return reply.status(400).send({
      status: 'Validation error',
      errors,
    })
  }
}
