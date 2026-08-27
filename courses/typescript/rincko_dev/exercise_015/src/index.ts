// Typeof

const username: string = 'Helder'
const nickname: typeof username = 'heldernf'
nickname

// ---------

const _username: string = 'Helder'

type HelderUserName = typeof _username

const _nickname: HelderUserName = 'heldernf'
_nickname

// ---------

const person = {
  name: 'Helder',
  age: 20,
}

type Person = typeof person

interface _Person<T> {
  data: T[]
}

const heldernf: Person = { name: 'Helder', age: 20 }
const obj: _Person<typeof person> = { data: [heldernf] }

console.log(obj)
