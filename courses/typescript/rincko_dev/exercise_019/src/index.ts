// readonly

interface User {
  readonly id: string
  name: string
  age: number
}

const user: User = {
  id: '1',
  name: 'Helder Neto',
  age: 20,
}

user.name = 'Helder'
// user.id = '2'

console.log(user)

// --------------

class Command {
  public readonly createdAt: Date
  public name: string

  constructor(name: string) {
    this.name = name
    this.createdAt = new Date()
  }

  public run() {
    this.name = this.name.toLowerCase()
    // this.createdAt = new Date()
  }
}

const command: Command = new Command('PiNG')
console.log(command)
command.run()
console.log(command)

// --------------

interface Player {
  nick: string
  health: number
  shield: number
  inventory: string[]
}

type StaticPlayer = Readonly<Player>

function play(player: StaticPlayer) {
  // player.shield = 37
  player
}
play

function freeze<T extends object>(obj: T): Readonly<T> {
  return Object.freeze(obj)
}

const player: Player = {
  nick: 'heldernf',
  health: 100,
  shield: 100,
  inventory: ['pistol', 'carrot'],
}

const staticPlayer = freeze(player)
staticPlayer
// staticPlayer.health = 2

// --------------

// import packageJson from '../package.json' with { type: 'json' }
// type StaticPackageJson = Readonly<typeof packageJson>

type StaticPackageJson = Readonly<typeof import('../package.json')>
function main(packageJson: StaticPackageJson) {
  // packageJson.name = 'none'
  packageJson.devDependencies.typescript = 'yes'
}
main(Object.create({}))
