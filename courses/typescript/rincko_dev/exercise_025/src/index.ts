// Exclude

type Primitive = string | number | boolean
type CustomPrimitive = Exclude<Primitive, number | boolean>

const value: CustomPrimitive = 'str'
value

// --------------

enum Colors {
  // Warm
  Red = '#ff0000',
  Orage = '#ffa500',

  // Cold
  Blue = '#0000ff',
  Green = '#008000',
}

// --------------

type WarmColors = Exclude<Colors, Colors.Blue | Colors.Green>
type ColdColors = Exclude<Colors, WarmColors>

interface Message<T> {
  type: T
  content: string
  color: T extends 'warm' ? WarmColors : T extends 'cold' ? ColdColors : never
}

function createMessage<T extends 'warm' | 'cold'>(options: Message<T>) {
  options
}

createMessage({ type: 'cold', content: 'Oiee', color: Colors.Green })
