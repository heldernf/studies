import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().min(1).max(65535),
})

type EnvSchema = z.infer<typeof envSchema>

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvSchema {}
  }
}

const parsedEnv = envSchema.parse(process.env)
process.env = Object.create({ ...process.env, ...parsedEnv })
