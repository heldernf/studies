// Union Types

type Primitive = string | number | boolean

function main(value: Primitive) {
  console.log('Value:', value)

  if (typeof value === 'string') {
    value.toUpperCase()
  }

  if (typeof value === 'number') {
    value.toFixed(2)
  }

  if (typeof value === 'boolean') {
    value.valueOf()
  }

  if (typeof value === 'string') return

  console.log('Value:', value)
}

main('Hello')

// ---------------------

enum TrafficLightType {
  Red,
  Yellow,
  Green,
}

interface YellowColor {
  type: TrafficLightType.Yellow
  wait(): void
}

interface RedColor {
  type: TrafficLightType.Red
  stop(): void
}

interface GreenColor {
  type: TrafficLightType.Green
  drive(): void
}

type TrafficLight = RedColor | YellowColor | GreenColor

const trafficLight: TrafficLight = {
  type: TrafficLightType.Yellow,
  wait() {},
}

console.log('Traffic Light:', trafficLight)

// ---------------------

type Action = 'create' | 'update' | 'delete'

function manage(action: Action) {
  console.log('Action:', action)
}

manage('delete')

type ImageSize = 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048

interface Image {
  name: string
  size: ImageSize
}

const image: Image = {
  name: 'heldernf.png',
  size: 512,
}

console.log('Image:', image)

type Status = 'notFound' | 404 | 'Ok' | 200 | 'forbidden' | 404

function sendStatus(status: Status) {
  console.log('Status:', status)
}

sendStatus('forbidden')

// ---------------------

import { readFile } from 'fs/promises'

type JSONValue =
  | string
  | number
  | boolean
  | JSONValue[]
  | { [key: string]: JSONValue }

// const test: JSONValue = {
//   'dsafa': ['', { j: []}]
// }

const jsonstring = await readFile('data.json', 'utf-8')
const json: JSONValue = JSON.parse(jsonstring)

if (typeof json === 'string') {
  json.toUpperCase()
}

if (Array.isArray(json)) {
  json.forEach((value) => {
    if (typeof value === 'number') {
      value.toFixed(2)
    }
  })
}

// ---------------------

type FindItemPredicate = number | ((value: string, index: number) => boolean)

function findItem(array: string[], predicate: FindItemPredicate) {
  if (typeof predicate === 'number') return array[predicate]

  return array.find(predicate)
}

const result = findItem(
  ['helder', 'typescript', 'javascript', 'heldernf'],
  (value, index) => value.startsWith('h') && index > 1,
)
console.log('Result:', result)
