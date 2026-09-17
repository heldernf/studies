// infer

type ArrayType<Arr> = Arr extends string[]
  ? string
  : Arr extends number[]
    ? number
    : Arr extends (string | number)[]
      ? string | number
      : never

const names = ['Helder', 'Isabella', 'Herick']
const numbers = [30, 11, 18, 22, 21]
const myArr1 = [...names, ...numbers]
const myArr2 = ['Helder', true, 28, 'Netozmk', null, 40, false, 92, -20]

type MyType = ArrayType<typeof names>
type MyType2 = ArrayType<typeof numbers>
type MyType3 = ArrayType<typeof myArr1>
type MyType4 = ArrayType<typeof myArr2>

const t: MyType = 'a'
const t2: MyType2 = 0
const t3: MyType3 = '0'
const t4: keyof MyType4 = Symbol('0') // todo: pq never retorna: string | number | symbol
console.log(t, t2, t3, t4)

type ArrayType2<Arr> = Arr extends Array<infer U> ? U : never

type MyType5 = ArrayType2<typeof names>
type MyType6 = ArrayType2<typeof numbers>
type MyType7 = ArrayType2<typeof myArr1>
type MyType8 = ArrayType2<typeof myArr2>

const t5: MyType5 = 'a'
const t6: MyType6 = 0
const t7: MyType7 = '0'
const t8: MyType8 = null
console.log(t5, t6, t7, t8)

// ---------------

type ArrayTypeOwnTest<T> = T extends infer U ? U : never

const nameOwnTest = 'Helder'
const numberOwnTest = 0
const nameNumberOwnTest: string | number = '0'
const nameNumberOwnTest2: string | number = 0
const xOwnTest: null | undefined = null
const x2OwnTest: null | undefined = undefined

type MyTypeOwnTest = ArrayTypeOwnTest<typeof nameOwnTest>
type MyTypeOwnTest2 = ArrayTypeOwnTest<typeof numberOwnTest>
type MyTypeOwnTest3 = ArrayTypeOwnTest<typeof nameNumberOwnTest>
type MyTypeOwnTest4 = ArrayTypeOwnTest<typeof nameNumberOwnTest2>
type MyTypeOwnTest5 = ArrayTypeOwnTest<typeof xOwnTest>
type MyTypeOwnTest6 = ArrayTypeOwnTest<typeof x2OwnTest>

const tOwnTest: MyTypeOwnTest = 'Helder'
const tOwnTest2: MyTypeOwnTest2 = 0
const tOwnTest3: MyTypeOwnTest3 = 'Any string'
const tOwnTest4: MyTypeOwnTest4 = 78690343
const tOwnTest5: MyTypeOwnTest5 = null
const tOwnTest6: MyTypeOwnTest6 = undefined
console.log(tOwnTest, tOwnTest2, tOwnTest3, tOwnTest4, tOwnTest5, tOwnTest6)

// ---------------

type GetSecondParam<Func> = Func extends (
  p1: any,
  p2: infer Param,
  ...args: any[]
) => any
  ? Param
  : never

function customLog(color: 'red' | 'green', content: string) {
  color
  content
}
function myFetch(url: string, options: RequestInit) {
  url
  options
}
function createUser(name: string, age: number, isProgrammer: boolean) {
  name
  age
  isProgrammer
}
function pow(value: number) {
  value
}
function any(v1: boolean, v2: string | boolean) {
  v1
  v2
}
function any2<T extends string | undefined>(
  v1: string,
  v2: T extends string ? null : symbol,
) {
  v1
  v2
}

type FuncParam = GetSecondParam<typeof customLog>
type FuncParam2 = GetSecondParam<typeof myFetch>
type FuncParam3 = GetSecondParam<typeof createUser>
type FuncParam4 = GetSecondParam<typeof pow>
type FuncParam5 = GetSecondParam<typeof any>
type FuncParam6 = GetSecondParam<typeof any2>

const u: FuncParam = 'Any string here.'
const u2: FuncParam2 = { method: 'POST' }
const u3: FuncParam3 = 20
const u4: FuncParam4 = null
const u5: FuncParam5 = false
const u6: FuncParam6 = Symbol(20)
console.log(u, u2, u3, u4, u5, u6)

type GetParameters<Func> = Func extends (...args: infer Args) => any
  ? Args
  : never

type FuncParameters = GetParameters<typeof customLog>
type FuncParameters2 = GetParameters<typeof myFetch>
type FuncParameters3 = GetParameters<typeof createUser>
type FuncParameters4 = GetParameters<typeof pow>
type FuncParameters5 = GetParameters<typeof any>
type FuncParameters6 = GetParameters<typeof any2>

const v: FuncParameters = ['green', 'Any string.']
const v2: FuncParameters2 = ['', { method: 'GET' }]
const v3: FuncParameters3 = ['', 0, false]
const v4: FuncParameters4 = [1]
const v5: FuncParameters5 = [true, true]
const v6: FuncParameters6 = ['', Symbol('')]
console.log(v, v2, v3, v4, v5, v6)

// ---------------

const placeholders = [
  'variable(title)',
  'var(member)',
  'Helder',
  'var(username)',
  'VAR(createdAt)',
  'var(timestamp)',
] as const

type Placeholders = typeof placeholders

type VarTypes = 'var' | 'VAR'
type GetVarName<T extends string> = T extends `${VarTypes}(${infer VarName})`
  ? VarName extends ''
    ? never
    : VarName
  : never

// type I0 = GetVarName<Placeholders[0]> // never
type I1 = GetVarName<Placeholders[1]>
// type I2 = GetVarName<Placeholders[2]> // never
type I3 = GetVarName<Placeholders[3]>
type I4 = GetVarName<Placeholders[4]> // never
type I5 = GetVarName<Placeholders[5]>
type AllIndexes = GetVarName<Placeholders[number]>

const i1: I1 = 'member'
const i3: I3 = 'username'
const i4: I4 = 'createdAt'
const i5: I5 = 'timestamp'
const allIndexes: AllIndexes = 'username'
console.log(i1, i3, i4, i5, allIndexes)
