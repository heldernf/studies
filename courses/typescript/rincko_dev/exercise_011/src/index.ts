// Type Guards

function printValue(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase())
    return
  }
}

printValue('helder')

// --------------------

class Dog {
  bark() {
    console.log('Woof!')
  }
}

class Cat {
  meow() {
    console.log('Meow!')
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) return animal.bark()
  animal.meow()
}
makeSound(new Dog())

// --------------------

interface Fish {
  swin: () => void
}

interface Bird {
  fly: () => void
}

function move(animal: Fish | Bird) {
  if ('swin' in animal) return animal.swin()
  animal.fly()
}
move({ fly() {} })

// --------------------

function main(value: string[] | Date) {
  if ('push' in value) return value.push('oieee')
  value.getDate()
}
main(['Helder'])

// --------------------

interface Chef {
  cook(): void
  certificate: string
}

interface Teacher {
  teach(): void
  diploma: string
}

interface Driver {
  drive(): void
  license: string
}

type Professionals = Chef | Teacher | Driver

function isChef(value: Professionals): value is Chef {
  return (value as Chef).cook !== undefined
}

function isTeacher(value: Professionals): value is Teacher {
  return (value as Teacher).teach !== undefined
}

function isDriver(value: Professionals): value is Driver {
  return (value as Driver).drive !== undefined
}

function execute(professional: Professionals) {
  if (isChef(professional)) return professional.cook()
  if (isTeacher(professional)) return professional.teach()
  if (isDriver(professional)) return professional.drive()

  console.log('Never')
}

execute({ cook: () => {}, certificate: 'Dehon' })

// --------------------

class _Professionals {
  public isChef(): this is _Chef {
    return this instanceof _Chef
  }

  public isTeacher(): this is _Teacher {
    return this instanceof _Teacher
  }

  public isDriver(): this is _Driver {
    return this instanceof _Driver
  }
}

class _Chef extends _Professionals {
  public cook(): void {}
  public certificate: string = 'Chefe Chico'
}

class _Teacher extends _Professionals {
  public cook(): void {}
  public certificate: string = 'Chefe Chico'
}

class _Driver extends _Professionals {
  public cook(): void {}
  public certificate: string = 'Chefe Chico'
}

function _execute(professional: _Professionals) {
  if (professional.isChef()) return professional
  if (professional.isTeacher()) return professional
  if (professional.isDriver()) return professional

  console.log('Maybe')
}

_execute(new _Driver())

// --------------------

function _main(value: unknown) {
  // value.

  if (Array.isArray(value)) {
    value.push('Helder Neto')
  }
}

_main('vazio')