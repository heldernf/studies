// Type Intersections

interface Robot {
  material: string
  fuel: string
}

interface Human {
  name: string
  age: number
}

type Cyborg = Robot & Human

const cyborg: Cyborg = {
  name: 'Ciborgue',
  age: 18,
  fuel: 'Gasolina',
  material: 'Metal',
}

console.log(cyborg)

interface MyFetchOptions {
  printInput?: boolean
  printTime?: boolean
}

type RequestOptions = MyFetchOptions & RequestInit

export function myFetch(input: string, options?: RequestOptions) {
  if (options?.printInput) console.log('Input:', input)
  if (options?.printTime) console.log('Time:', new Date().toDateString())
  return fetch(input, options)
}

const response = await myFetch('https://www.freepublicapis.com/api/random', {
  printInput: true,
  printTime: true,
})
console.log(await response.json())

// type CustomString = string & number & boolean
// const custom: CustomString = 'Never'