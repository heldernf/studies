// as const

const colors = ['vermelhor', 'azul', 'verde', 'amarelo'] as const
// colors.push('lilás')
// colors.pop()

const [red, blue, ...others] = colors
console.log(red, blue, ...others)

// -----------

const config = {
  version: 2,
  autoSave: true,
} as const

// config.version = 3

config.version
config.autoSave

// -----------

const directions = ['north', 'south', 'east', 'west'] as const

type Directions = (typeof directions)[number]

const mySide: Directions = 'west'

console.log(mySide)

// -----------

function setStatus(status: 'success' | 'error' | 'pending') {
  console.log(`Status: ${status}`)
}

let currentStatus = 'success' as const

setStatus(currentStatus)

// -----------

const Action = {
  create: 1,
  update: 2,
  delete: 3,
} as const

// Action.create = 55

type ActionEnum = typeof Action
type Actions = keyof ActionEnum

function manage(action: Actions | ActionEnum[Actions]) {
  if (typeof action === 'string') {
    // 'create' | 'update' | 'delete'
    return action
  }

  // 1 | 2 | 3
  return action
}

manage(1)
manage(Action.create)
