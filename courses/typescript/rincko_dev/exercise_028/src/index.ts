// Mapped Types

interface User {
  id: string
  name: string
  age?: number
  email: string
  isAdmin: boolean
  send(): string
  join(): void
  isActive(): boolean
  data: {
    title: string
    author: string
  }
  data2: {
    author: string
  }
  data3: {
    title: string
    author: string
    coAuthor: string
  }
}

// ----------------

type MyPartial<T> = {
  [Key in keyof T]?: T[Key]
}

const partial: MyPartial<User> = {
  isAdmin: false,
}
console.log(partial)

type MyRequired<T> = {
  [Key in keyof T]-?: T[Key]
}

const required: MyRequired<User> = {
  id: '1',
  name: 'Helder',
  age: 20, // Now is required
  email: 'helderneto2005@gmail.com',
  isAdmin: true,
  send() {
    return ''
  },
  join() {},
  isActive() {
    return true
  },
  data: {
    author: 'Helder',
    title: 'Title',
  },
  data2: {
    author: 'Helder',
  },
  data3: {
    title: 'Title',
    author: 'Helder',
    coAuthor: 'Me',
  },
}
console.log(required)

// ----------------

type ToBooleanRecord<T> = {
  [Key in keyof T]: boolean
}

type BooleanUser = ToBooleanRecord<Partial<User>>

const booleanUser: BooleanUser = {
  id: true,
  email: true,
  isAdmin: true,
  data: false,
}
console.log(booleanUser)

// ----------------

type UnderscoreProps<T> = {
  [Key in keyof T as Key extends string ? `_${Key}` : Key]: T[Key]
}

type UnderscoreUser = UnderscoreProps<User>

const underscoreUser: Partial<UnderscoreUser> = {
  _name: 'Helder',
}
console.log(underscoreUser)

// ----------------

type NoMethods<T> = {
  [Key in keyof T as T[Key] extends Function ? never : Key]: T[Key]
}

type NoMethodsUser = NoMethods<User>

const noMethodsUser: Partial<NoMethodsUser> = {
  id: '1',
}
console.log(noMethodsUser)

// ----------------

type NoProps<T> = {
  [Key in keyof T as T[Key] extends Function ? Key : never]: T[Key]
}

type NoPropsUser = NoProps<User>

const noPropsUser: Partial<NoPropsUser> = {
  send() {
    return ''
  },
}
console.log(noPropsUser)

// ----------------

type RemovePropType<T, U> = {
  [Key in keyof T as T[Key] extends U ? never : Key]: T[Key]
}

type RemovedPropTypeUser = RemovePropType<
  User,
  string | (() => string) | (number | undefined) | { title: string }
>

const removedPropTypeUser: RemovedPropTypeUser = {
  isAdmin: true,
  join() {},
  isActive() {
    return true
  },
  data2: {
    author: 'Helder',
  },
}
console.log(removedPropTypeUser)

// ----------------

type MyOwnTest<T> = {
  [Key in keyof T]: T[Key] extends { title: string; author: string }
    ? T[Key]['author']
    : T[Key]
}

const myOwnTest: MyPartial<MyOwnTest<User>> = {
  data: 'Only a string',
  data2: {
    author: 'Still an object',
  },
  data3: 'Only a string',
}
console.log(myOwnTest)

type MyOwnTest2<T> = {
  [Key in keyof T]: T[Key] extends { title: string; author: string }
    ? Omit<T[Key], 'author'> & Partial<Pick<T[Key], 'author'>>
    : T[Key]
}

const myOwnTest2: MyPartial<MyOwnTest2<User>> = {
  data: {
    title: 'Helder of War (2018)',
  },
  data2: {
    author: 'Helder',
  },
  data3: {
    title: 'Helder of War Ragnarok',
    coAuthor: 'Kratos',
  },
}
console.log(myOwnTest2)
