// Recursive Types

type JSONValue =
  | string
  | number
  | boolean
  | JSONValue[]
  | {
      [key: string]: JSONValue
    }

const json: JSONValue = ['A', 2]
const json2: JSONValue = {
  a: { a: { b: false, c: [true, 'O', { o: 'u', i: 5, a: [3, false] }, [3]] } },
}
const json3: JSONValue = {
  name: 'HNF',
  type: 'module',
  scripts: {
    typescript: [''],
  },
}
console.log(json, json2, json3)

// --------------

type PackageJson = typeof import('../package.json')

// -----

type PartialPackageJson = Partial<PackageJson>
const pkg: PartialPackageJson = {
  name: 'HNF',
  // scripts: {},
}
console.log(pkg)

// -----

type NestedPartial<T> = {
  [K in keyof T]?: T[K] extends object ? NestedPartial<T[K]> : T[K]
}

type NestedPartialPackageJson = NestedPartial<PackageJson>
const nestedPartialPkg: NestedPartialPackageJson = {
  type: 'module',
  scripts: {},
}
console.log(nestedPartialPkg)

// -----

type NestedRequired<T> = {
  [K in keyof T]-?: T[K] extends object ? NestedRequired<T[K]> : T[K]
}

type NestedRequiredPackageJson = NestedRequired<PackageJson>
const nestedRequiredPkg: NestedRequiredPackageJson = {
  name: 'HNF',
  main: 'index.hnf',
  scripts: {
    build: 'hnf',
    dev: 'hnf d index.hnf',
    start: 'node .',
  },
  type: 'module',
  devDependencies: {
    '@types/node': '^26.2.0',
    tsx: '^4.23.12',
    typescript: '^7.0.2',
  },
}
console.log(nestedRequiredPkg)

// -----

type NestedReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? NestedReadonly<T[K]> : T[K]
}

type NestedReadonlyPackageJson = NestedReadonly<PackageJson>
const nestedReadonlyPkg: NestedPartial<NestedReadonlyPackageJson> = {
  name: 'HNF',
  scripts: {
    build: 'hnf',
  },
}
console.log(nestedReadonlyPkg)

function main(pkg: NestedReadonlyPackageJson) {
  pkg
  // pkg.scripts.build = ''// No possible, it's readonly property
  // pkg.scripts.dev = '' // No possible, it's readonly property
}
main

// --------------

const names = 'Helder,NetozMK,Belinha,Fadinha'

type Split<
  Separator extends string,
  Text extends string,
> = Text extends `${infer Splited}${Separator}${infer Rest}`
  ? Splited | Split<Separator, Rest>
  : Text

type Names = Split<',', typeof names>

const name: Names = 'Fadinha'
console.log(name)
