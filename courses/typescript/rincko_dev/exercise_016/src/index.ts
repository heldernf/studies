// Keyof

interface Person {
  name: string
  age: number
  email: string
}

type PersonKeys = keyof Person

function modifyProp(prop: PersonKeys) {
  return prop
}

modifyProp('age')

// -----------

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const person = {
  name: 'Helder',
  age: 20,
}

const player = {
  nick: 'heldernf',
  health: 100,
}

const book = {
  title: 'Diário de um Banana',
  author: 'Sei lá',
}

console.log(
  getProperty(person, 'name'),
  getProperty(player, 'nick'),
  getProperty(book, 'author'),
)

interface UserSchema {
  name: string
  nickname: string
  id: number
}

const user: UserSchema = {
  name: 'Helder',
  nickname: 'heldernf',
  id: 1,
}

interface Data<T> {
  args: string[]
  get<U extends keyof T>(path: U): T[U]
}

function main(data: Data<UserSchema>) {
  return [data.get('nickname'), data.get('name'), data.get('id')] as const
}

const [nickname, name, id] = main({ args: ['test'], get: (path) => user[path] })
console.log(nickname, name, id)

// -----------

import config from '../config.json' with { type: 'json' }

type ColorKey = keyof typeof config.colors

function coloredLog(color: ColorKey, text: string) {
  console.log(config.colors[color], text)
}

coloredLog('primary', 'Hello World')
