// Omit

interface User {
  id: number
  name: string
  email: string
  isAdmin: boolean
}

type BasicUserInfo = Omit<User, 'email' | 'isAdmin'>

const user: BasicUserInfo = {
  id: 1,
  name: 'Helder Neto',
}

console.log(user)

// -----------------

type DateProps = 'getHours' | 'getMinutes' | 'getDay'

type DateTime = Omit<Date, DateProps>

function main(date: DateTime) {
  // date.getHours
  date
}
main

// -----------------

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

function execute<T, K extends keyof T>(obj: T, keys: readonly K[]): Omit<T, K> {
  const result = { ...obj }

  for (const key of keys) delete result[key]

  return result
}

const newPlayer = execute(player, ['shield'])
const newPlayer2 = execute(player, ['health', 'inventory'])

console.log('New Player:', newPlayer)
console.log('New Player2:', newPlayer2)

newPlayer.nick
// newPlayer.shield

newPlayer2.nick
newPlayer2.shield
