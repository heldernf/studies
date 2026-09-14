// Partial

interface User {
  id: string
  name: string
  email: string
  isAdmin: string
}

type PartialUser = Partial<User>

const user: PartialUser = {
  id: '1',
  name: 'Helder',
}
user

// ---------------

interface Player {
  nick: string
  health: number
  shield: number
  inventory: string[]
}

type CustomPlayer = Partial<Omit<Player, 'nick'>> & Pick<Player, 'nick'>

const player: CustomPlayer = {
  nick: 'Helder',
}

player

// ---------------

type PackageJson = Partial<typeof import('../package.json')>
const pacakgeJson: PackageJson = {}
pacakgeJson
