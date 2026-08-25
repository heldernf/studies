// Records

interface SettingsData<T> {
  name: T
  age: number
}

type Settings = Record<string, SettingsData<string> | number>

const settings: Settings = {
  data1: { name: 'helder', age: 20 },
  data2: 2,
}

console.log(settings)

// --------

type Offsets = Record<number, number | string>

const offsets: Offsets = {
  0.1: 34,
  1: 'abb266',
  '2': 0,
}

for (const [k, v] of Object.entries(offsets)) {
  console.log(`key: ${typeof k} = ${k} | value: ${typeof v} = ${v}`)
}

// --------

interface Route {
  path: string
  children?: Routes
}

type Routes = Record<string, Route>

const routes: Routes = {
  home: {
    path: '/home',
    children: {
      bar: { path: '/bar' },
    },
  },
}

console.log(routes)

// --------

type Dictionary = Record<string, number | string | boolean>

const dict: Dictionary = {
  id: 0,
  name: 'Helder',
  isProgrammer: true,
}

dict.id

// --------

type Feature = 'compileOnSave' | 'autoSave' | 'autoUpdate'

type Features = Record<Feature, boolean>

const config: Features = {
  compileOnSave: false,
  autoSave: true,
  autoUpdate: true,
}
console.log('autoSave' in config)
