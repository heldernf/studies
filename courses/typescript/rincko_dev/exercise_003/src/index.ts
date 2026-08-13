// Type Alias

interface UserWallet {
  coins?: number
  credits?: number
}

interface User {
  name: string
  createdAt: Date
  wallet?: UserWallet
}

type Input = string | User
function prompt(input: Input) {
  return input
}

prompt({ name: '', createdAt: new Date() })

// -----------------

interface Dog {
  name: string
  breed: string
  bark(): string
}

interface Cat {
  name: string
  color: string
  meow(): string
}

interface Bird {
  name: string
  whingspan: string
  chirp(): string
}

interface Cow {
  name: string
  weight: string
  moo(): string
}

type Animal = Dog | Cat | Bird | Cow

function createAnimal(animal: Animal) {
  return animal
}

createAnimal({ name: 'Fadinha', breed: 'Salsicha', bark: () => 'Au-Au' })

// -----------------

type _UserWallet = {
  coins?: number
  credits?: number
}

type _User = {
  name: string
  createdAt: Date
  wallet?: _UserWallet
}

type _Admin = _User & {
  ban(user: User): void
  kick(user: User): void
}

const admin: _Admin = {
  name: 'Tester',
  createdAt: new Date(),
  ban: () => 'Banido',
  kick: () => 'Expulso',
}
console.log(admin)
