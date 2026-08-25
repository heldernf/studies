// Generics

function getFirstElement<T>(arr: T[]) {
  return arr[0]
}

const names = ['Helder', 'Santos', 'Oliveira', 'Neto']
const myName = getFirstElement(names)
console.log(myName)

const numbers = [1, 2, 3, 4, 5]
const myNumbers = getFirstElement(numbers)
console.log(myNumbers)

const booleans = [true, true, true, false, false]
const myBooleans = getFirstElement(booleans)
console.log(myBooleans)

const allTogether = [...names, ...numbers, ...booleans]
const myAllTogether = getFirstElement(allTogether)
console.log(myAllTogether)

// -------------

function isEqual<T>(a: T, b: T): boolean {
  return a === b
}
console.log(isEqual(10, 20))
console.log(isEqual(20, 20))
console.log(isEqual('20', '20 '))

// -------------

interface APIResponse<T> {
  data: T
  success: boolean
  error?: string
}

interface User {
  id: string
  name: string
  role: string
}
function fetchUser(): APIResponse<User> {
  return { data: { id: '123', name: 'Helder', role: 'admin' }, success: true }
}
const response = fetchUser()
console.log(response.data.role)

interface Book {
  position: string
  title: string
}
function fetchBook(): APIResponse<Book> {
  return { data: { position: '1', title: 'The Love Book' }, success: true }
}
const response2 = fetchBook()
console.log(response2.data.title)

type _Number = number
function fetchNumber(position: number): APIResponse<_Number> {
  return { data: numbers[position], success: true }
}
const response3 = fetchNumber(3)
console.log(response3.data)

// -------------

class MyCustomArray<T> {
  private items: T[] = []

  public add(item: T) {
    this.items.unshift(item)
  }

  public remove(): T | undefined {
    return this.items.shift()
  }

  public isEmpty(): boolean {
    return this.items.length === 0
  }

  public getItems(): T[] {
    return this.items
  }
}

const myCustomStringArry = new MyCustomArray<string>()
myCustomStringArry.add('Helder Arr')
const removed = myCustomStringArry.remove()
console.log(removed)

const myCustomNumber = new MyCustomArray<number>()
myCustomNumber.add(20)
const removedNumber = myCustomNumber.remove()
console.log(removedNumber)

interface Player {
  name: string
  health: number
  shield: number
  isDead: boolean
}

const players = new MyCustomArray<Player>()
players.add({ name: 'Helder Neto', health: 100, shield: 100, isDead: false })
const removedPlayer = players.remove()
console.log(removedPlayer?.name)
console.log(removedPlayer)

const arr = new MyCustomArray<string | number | boolean | null | undefined>()
arr.add('hnf')
arr.add(2)
arr.add(true)
arr.add(null)
arr.add(undefined)

const arry = new MyCustomArray<string | undefined>()
arry.add('Oie')
arry.add(arry.remove())
console.log(arry.getItems())
arry.remove()
console.log(arry.getItems())

// -------------

function logLength<T extends { length: number }>(item: T) {
  console.log(item.length)
}
const _numbers = [1, 2, 3]
const _myObj = { length: 20 }
const _myName = 'Helder'

logLength(_numbers)
logLength(_myObj)
logLength(_myName)

// -------------

interface HasName {
  name: string
  isProgrammer: boolean
}

function greet<T extends HasName>(obj: T) {
  console.log(`Olá ${obj.name}`)
}

const user = {
  name: 'Helder Neto',
  nickname: 'heldernf',
  isProgrammer: true,
}

greet(user)

// -------------

function combine<T extends number | string>(a: T, b: T): string {
  return `${a}${b}`
}
combine(10, 20)

// -------------

abstract class Animal {
  constructor(public name: string) {}
}

class Dog extends Animal {
  bark() {
    console.log('Woof!')
  }
}

class Cat extends Animal {
  meow() {
    console.log('Meow!')
  }
}

function createInstance<T extends Animal>(
  Class: new (name: string) => T,
  name: string,
): T {
  return new Class(name)
}

const dog = createInstance(Dog, 'Fadinha')
console.log(dog)
const cat = createInstance(Cat, 'Pixixico')
console.log(cat)
