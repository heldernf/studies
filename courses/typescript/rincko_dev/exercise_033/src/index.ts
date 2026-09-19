import fastify from 'fastify'
import cors from '@fastify/cors'
import autoload from '@fastify/autoload'
import path from 'node:path'
import log from 'consola'
import ck from 'chalk'
import { errorHandler } from '@/functions/error.js'
import '@/settings/env.js'

const { PORT: port } = process.env

const app = fastify()
app.setErrorHandler(errorHandler)
app.register(cors, { origin: '*' })
app.register(autoload, {
  dir: path.join(import.meta.dirname, 'routes'),
  routeParams: true,
})

app.addHook('onRoute', ({ method, path }) => {
  if (method === 'HEAD' || method === 'OPTIONS') return
  log.success(`${ck.yellow(method)} ${ck.blue(path)}`)
})

await app.listen({ port, host: '0.0.0.0' }).catch((err) => {
  log.error(err)
  process.exit(1)
})

log.success(ck.green(`Server listening on port ${ck.blue(port)}`))
