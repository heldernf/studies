// Pick

interface User {
  id: string
  name: string
  email: string
  isAdmin: boolean
}

type BasicUserInfo = Pick<User, 'id' | 'name'>

const user: BasicUserInfo = {
  id: '1',
  name: 'Helder Neto',
}
user

// ------------

type DateProps = 'getHours' | 'getMinutes' | 'getDay'
type DateTime = Pick<Date, DateProps>

const newDate: DateTime = {
  getDay() {
    return 1
  },
  getHours() {
    return 2
  },
  getMinutes() {
    return 3
  },
}

newDate

// ------------

interface Player {
  nick: string
  health: number
  shield: number
  inventory: string[]
}

const player: Player = {
  nick: 'heldernf',
  health: 100,
  shield: 100,
  inventory: ['water'],
}

function execute<T, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> {
  const result = {} as Pick<T, K>

  for (const key of keys) result[key] = obj[key]

  return result
}

const newPlayer = execute(player, ['nick', 'health', 'inventory'])
const newPlayer2 = execute(player, ['nick', 'shield'])

console.log('New Player:', newPlayer)
console.log('New Player2:', newPlayer2)
