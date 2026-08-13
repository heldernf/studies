// Enums

// 1 North
// 2 South
// 3 East
// 4 West

enum Direction {
  North = 1,
  South,
  East,
  West,
}

const position = {
  x: 100,
  y: 230,
  direction: Direction.South,
}

console.log(position)

enum ClothingSize {
  ExtraSmall = 'PP',
  Small = 'P',
  Medium = 'M',
  Large = 'G',
  ExtraLarge = 'GG',
}

const cloth = {
  color: 'green',
  size: ClothingSize.Large,
}

console.log(cloth)

enum _ClothingSize {
  ExtraSmall = 'Bem pequeno',
  Small = 'Pequeno',
  Medium = 'Médio',
  Large = 'Grande',
  ExtraLarge = 'Muito Grande',
}

const _cloth = {
  color: 'green',
  size: _ClothingSize.Large,
}

console.log(_cloth)

enum ButtonStyle {
  Purple,
  Green,
  Blue,
  Red,
  Gray,
}

interface Button {
  label: string
  emoji: string
  style: ButtonStyle
}

const button: Button = {
  label: 'Click me',
  emoji: '👆',
  style: ButtonStyle.Green,
}

console.log(button)
