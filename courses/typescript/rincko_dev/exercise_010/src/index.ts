// Overloads

/**
 * @param value
 * Criar uma nova data padrão sem argumentos
 */
function createDate(): Date

/**
 * @param value
 * Criar uma nova data a partir de outra
 */
function createDate(value: Date): Date

/**
 * @param value
 * Criar uma nova data usando uma data numérica
 */
function createDate(value: number): Date

/**
 * @param value
 * Criar uma nova data usando uma data por extenso
 */
function createDate(value: string): Date

function createDate(value?: Date | number | string): Date {
  return value === undefined
    ? new Date()
    : value instanceof Date
      ? value
      : new Date(value)
}

console.log(
  createDate(),
  createDate(new Date()),
  createDate(2),
  createDate('2026-08-18'),
)

// ---------------------

interface Person {
  name: string
  age: number
}

interface Dog {
  name: string
  bread: string
}

interface House {
  adress: string
  size: number
}

function generate(type: 'person'): Person
function generate(type: 'dog'): Dog
function generate(type: 'house'): House

function generate(type: 'person' | 'dog' | 'house') {
  switch (type) {
    case 'person':
      return { name: 'Helder Neto', age: 20 }
    case 'dog':
      return { name: 'Fadinha', bread: 'Salsicha' }
    case 'house':
      return { adress: 'Rua Onde Judas Perdeu as Botas', size: 50 }
  }
}

const house = generate('house')
console.log(house.adress)

// ---------------------

interface Component {
  id: string
  label: string
}

interface Button extends Component {
  style: string
}

interface SelectMenu extends Component {
  options: string[]
}

enum InputType {
  String,
  Number,
  Date,
  Email,
  Password,
}

interface Input extends Component {
  type: InputType
}

function buildComponent(id: string, label: string, style: string): Button
function buildComponent(
  id: string,
  label: string,
  options: string[],
): SelectMenu
function buildComponent(id: string, label: string, type: InputType): Input

function buildComponent(
  id: string,
  label: string,
  arg: string | string[] | InputType,
) {
  if (arg === 'string') return { id, label, style: arg }
  if (Array.isArray(arg)) return { id, label, options: arg }
  return { id, label, type: arg }
}

const button = buildComponent('mybutton', 'Clique Aqui!', 'green')
console.log(button)

const selectMenu = buildComponent('myselectmenu', 'Selecione uma pessoa:', [
  'Helder',
  'Isa',
  'Herick',
])
console.log(selectMenu)

const inputType = buildComponent(
  'inputtype',
  'Tipo de input:',
  InputType.Password,
)
console.log(inputType)

// ---------------------

interface Triangle {
  sideA: number
  sideB: number
  sideC: number
}

interface Scalene extends Triangle {
  type: 'scalene'
}

interface Isosceles extends Triangle {
  type: 'isosceles'
}

interface Equilateral extends Triangle {
  type: 'equilateral'
}

type Triangles = Scalene | Isosceles | Equilateral

/**
 * Return a scalene triangle.
 */
function triangle(sideA: number, sideB: number, sideC: number): Scalene
/**
 * Return a isosceles triangle.
 */
function triangle(sideA: number, sideBC: number): Isosceles
/**
 * Return a equilateral triangle.
 */
function triangle(sideABC: number): Equilateral

function triangle(sideA: number, sideB?: number, sideC?: number): Triangles {
  if (sideB && sideC) return { sideA, sideB, sideC, type: 'scalene' }
  if (sideB) return { sideA, sideB, sideC: sideB, type: 'isosceles' }
  return { sideA, sideB: sideA, sideC: sideA, type: 'equilateral' }
}

console.log(triangle(1, 2, 3))
console.log(triangle(1, 2))
console.log(triangle(1))

// ---------------------

class TriangleBuilder {
  static build(sideA: number, sideB: number, sibeC: number): Scalene
  static build(sideA: number, sideBC: number): Isosceles
  static build(sideABC: number): Equilateral
  static build(sideA: number, sideB?: number, sideC?: number): Triangles {
    if (sideB && sideC) return { sideA, sideB, sideC, type: 'scalene' }
    if (sideB) return { sideA, sideB, sideC: sideB, type: 'isosceles' }
    return { sideA, sideB: sideA, sideC: sideA, type: 'equilateral' }
  }
}

console.log('class', TriangleBuilder.build(1, 2, 3))
console.log('class', TriangleBuilder.build(1, 2))
console.log('class', TriangleBuilder.build(1))

// ---------------------

class Player {
  public name: string
  public nickname: string
  public health: number

  constructor(name: string, nickname: string)
  constructor(name: string, health: number)
  constructor(name: string, arg: string | number) {
    this.name = name

    if (typeof arg === 'string') {
      this.nickname = arg
      this.health = 20
    } else {
      this.health = arg
      this.nickname = name
    }
  }
}

const helder = new Player('Helder Neto', 'heldernf')
const isa = new Player('Ana Isabella', 100)
console.log(helder)
console.log(isa)
