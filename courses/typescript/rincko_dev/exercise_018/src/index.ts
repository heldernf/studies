// never

function throwError(message: string): never {
  throw new Error(message)
}

function main() {
  try {
    throwError('Ocorreu um erro')
  } catch (error) {
    console.log(typeof error, 'Errorrrrr!')
  }

  const name = 'Helder'
  console.log(name)
}

main()

// -------------

function main2(x: string | number) {
  if (typeof x === 'string') {
    x.toUpperCase()
    return
  }

  if (typeof x === 'number') {
    x.toFixed(2)
    return
  }
}

main2(2)

// -------------

interface StringOptions {
  upper(): string
  lower(): string
}

interface NumberOptions {
  pow(exp: number): number
  sub(b: number): number
  sum(b: number): number
}

type IsString<T> = T extends string ? true : false
type IsNumber<T> = T extends number ? true : false

type ManipuleOptions<T extends string | number> =
  IsString<T> extends true
    ? StringOptions
    : IsNumber<T> extends true
      ? NumberOptions
      : never

// const options: ManipuleOptions<boolean> = false
const options: ManipuleOptions<string> = {
  lower() {
    return 'HELDERNF'.toLowerCase()
  },
  upper() {
    return 'HelDEr'.toUpperCase()
  },
}

console.log(options.lower())
