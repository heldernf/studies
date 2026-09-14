// NonNullable

type MaybeName = string | null | number | undefined

type Name = NonNullable<MaybeName>

let name
const name1: MaybeName = name
const name2: Name = 'Helder'

console.log(name1, name2)

// -------------

interface User {
  id: number | null
  name: string | undefined
}

interface NonNullableUser {
  id: NonNullable<User['id']>
  name: NonNullable<User['name']>
}

const user: NonNullableUser = {
  id: 1,
  name: 'Helder',
}

console.log(user)

// -------------

interface Member {
  id: string
  name: string
  posts?: {
    title: string
    content: string
    tags?: {
      name: string
      icon?: string
    }[]
    createdAt: Date
  }[]
}

type Post = NonNullable<Member['posts']>[number]

const post: Post[] = [
  {
    title: 'Ratazana',
    content: 'blá blá',
    createdAt: new Date(),
  },
]

console.log(post)

type Tag = NonNullable<Post['tags']>[number]

const tag: Tag = {
  name: '#hbo',
  icon: 'hbo.icon',
}

console.log(tag)
