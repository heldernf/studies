// Extract

type Primitive =
  | string
  | number
  | boolean
  | string[]
  | number[]
  | Date
  | Set<string>

type AuraPlusEgo = Extract<Primitive, string | number>
const aura: AuraPlusEgo = 67
console.log(aura)

type String = Extract<Primitive, { length: number }>
const string: String = 'text'
console.log(string)

type SetSize = Extract<Primitive, { size: number }>
const setSize: SetSize = new Set(['v1', 'v2'])
console.log(setSize.size)

// ------------

interface User {
  name: string
  age: number
}

interface Player {
  nickname: string
  health: number
}

interface Member {
  nickname: string
  username: string
}

interface Book {
  title: string
  author: string
}

interface Post {
  title: string
  author: string
  createdAt: Date
}

interface Admin extends User {
  ban(user: User): void
  kick(user: User): void
}

type Elements = User | Player | Member | Book | Post | Admin

type Ext1 = Extract<Elements, { name: string }>
type Ext2 = Extract<Elements, { nickname: string }>
type Ext3 = Extract<Elements, { title: string; createdAt: Date }>

const ext1: Ext1 = { name: 'Helder', age: 20 }
console.log(ext1)

const ext2: Ext2 = { nickname: 'heldernf', health: 100 }
console.log(ext2)

const ext3: Ext3 = {
  title: "Helder's Wife",
  author: 'Helder Neto',
  createdAt: new Date(),
}
console.log(ext3)
