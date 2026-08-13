// Type Annotations

const myName: string = 'Helder Neto'
const myAge: number = 20
const isMale: boolean = true
const _any: any = class {}
const _null: null = null
const _undefined: undefined = undefined
const _symbol: symbol = Symbol('id')
const salaryExpectations: bigint = 9007199254740992n

console.log(`
myName: ${myName}
myAge: ${myAge}
isMale: ${isMale}
_any: ${_any}
_null: ${_null}
_undefined: ${_undefined}
_symbol: ${String(_symbol)}
salaryExpectations: ${salaryExpectations}
\n----------------------
`)

// ----------------------

function sum(value1: number, value2:number): number {
    return value1 + value2
}
console.log("Soma: " + sum(2, 3), '\n\n----------------------\n')

// ----------------------

function optional(param1: number, param2?: boolean): string{
    return `${param1} | ${param2}`
}
console.log(optional(5))
console.log(optional(5, true), '\n\n----------------------\n')

// ----------------------

function optional2(param1: number, param2: boolean = false): string{
    return `${param1} | ${param2}`
}
console.log(optional2(2))
console.log(optional2(2, true))
