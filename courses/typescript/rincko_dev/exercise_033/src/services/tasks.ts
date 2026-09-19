import { db } from '@/database'
import type {
  CreateTaskSchema,
  TaskSchema,
  TaskStatus,
  UpdateTaskSchema,
} from '@/schemas/tasks.js'

export const tasksService = {
  async exists(id: string): Promise<boolean> {
    return await db.tasks.has(id)
  },

  async getById(id: string): Promise<TaskSchema | null> {
    return await db.tasks.get(id)
  },

  async getAll(): Promise<TaskSchema[]> {
    const data = await db.tasks.all()
    return data.map(({ value }) => value)
  },

  async create(data: CreateTaskSchema): Promise<TaskSchema> {
    const createdAt = new Date()
    const id = createdAt.getTime().toString()
    const status: TaskStatus = 'pending'

    return await db.tasks.set<TaskSchema>(id, {
      ...data,
      id,
      status,
      createdAt: createdAt.toString(),
    })
  },

  async update(
    id: string,
    data: UpdateTaskSchema,
  ): Promise<TaskSchema | false> {
    const task = await this.getById(id)

    if (task) return db.tasks.set<TaskSchema>(id, { ...task, ...data })

    console.log(
      `The task with id(${id}) was not found. It could not be updated!`,
    )
    return false
  },

  async delete(id: string) {
    return await db.tasks.delete(id)
  },
}
