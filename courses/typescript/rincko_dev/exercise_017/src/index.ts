// Conditional types

const [conditionalTrue, conditionalFalse] = [
  'É uma string',
  'Não é uma string',
] as const
type ConditionalTrue = typeof conditionalTrue
type ConditionalFalse = typeof conditionalFalse
type Conditional<T> = T extends string ? ConditionalTrue : ConditionalFalse

// type 1
function conditional<T>(value: T): Conditional<T>

function conditional(value: unknown) {
  return typeof value === 'string' ? conditionalTrue : conditionalFalse
}
console.log(conditional(''), conditional(1))

// type 2
function conditional2<T>(value: T): Conditional<T> {
  return (
    typeof value === 'string' ? conditionalTrue : conditionalFalse
  ) as Conditional<T>
}
console.log(conditional2(''), conditional2(1))

// ----------------

class SelectMenu {
  declare private __brand: 'SelectMenu'
}
class CheckBox {
  declare private __brand: 'CheckBox'
}
class Input {
  declare private __brand: 'Input'
}
class Button {
  declare private __brand: 'Button'
}

const elements = {
  selectmenu: SelectMenu,
  checkbox: CheckBox,
  input: Input,
  button: Button,
}

type ElementType = keyof typeof elements

type GetElement<T> = T extends 'selectmenu'
  ? SelectMenu
  : T extends 'checkbox'
    ? CheckBox
    : T extends 'input'
      ? Input
      : T extends 'button'
        ? Button
        : never

// Type 1

interface Element<T extends ElementType> {
  execute(element: GetElement<T>): void
}

const element: Element<'button'> = {
  execute(element) {
    console.log(element)
  },
}

element.execute(new Button())

// Type 2

interface Element2<T extends ElementType> {
  type: T
  execute(element: GetElement<T>): void
}

function createData<T extends ElementType>(element: Element2<T>) {
  element.execute(new elements[element.type]() as GetElement<T>)
}

createData({
  type: 'button',
  execute(element) {
    console.log(element)
  },
})

// ----------------

interface StringOptions {
  upper(): string
  lower(): string
}

interface NumberOptions {
  pow(exp: number): number
  sub(b: number): number
  sum(b: number): number
}

type ManipuleValue = string | number

// type 1

type IsString<T> = T extends string ? true : false
type IsNumber<T> = T extends number ? true : false

type ManipuleOptions<T extends ManipuleValue> =
  IsString<T> extends true
    ? StringOptions
    : IsNumber<T> extends true
      ? NumberOptions
      : never

function manipule<T extends ManipuleValue>(value: T): ManipuleOptions<T> {
  if (typeof value === 'string') {
    return {
      upper() {
        return value.toUpperCase()
      },
      lower() {
        return value.toLowerCase()
      },
    } as ManipuleOptions<T>
  }

  const _value = value as number

  return {
    pow(exp) {
      return _value ** exp
    },
    sub(b) {
      return _value - b
    },
    sum(b) {
      return _value + b
    },
  } as ManipuleOptions<T>
}

console.log(manipule(8).pow(3))

// type 2

function manipule2(value: string): StringOptions
function manipule2(value: number): NumberOptions
function manipule2(value: ManipuleValue): StringOptions | NumberOptions {
  if (typeof value === 'string') {
    return {
      upper() {
        return value.toUpperCase()
      },
      lower() {
        return value.toLowerCase()
      },
    }
  }

  return {
    pow(exp) {
      return value ** exp
    },
    sub(b) {
      return value - b
    },
    sum(b) {
      return value + b
    },
  }
}

console.log(manipule2(8).pow(3))

// type 3

type ManipuleOptions3<T extends ManipuleValue> = T extends string
  ? StringOptions
  : T extends number
    ? NumberOptions
    : never

function manipule3<T extends ManipuleValue>(value: T): ManipuleOptions3<T>

function manipule3(value: ManipuleValue): StringOptions | NumberOptions {
  if (typeof value === 'string') {
    return {
      upper() {
        return value.toUpperCase()
      },
      lower() {
        return value.toLowerCase()
      },
    }
  }

  return {
    pow(exp) {
      return value ** exp
    },
    sub(b) {
      return value - b
    },
    sum(b) {
      return value + b
    },
  }
}

console.log(manipule3('Helder').upper())
console.log(manipule3(20).sum(1))
