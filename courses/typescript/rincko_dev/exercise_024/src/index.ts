// Required

interface User {
  id?: string
  name?: string
  email?: string
  isAdmin?: boolean
}

type RequiredUser = Required<User>

const user: RequiredUser = {
  id: '1',
  name: 'Helder',
  email: 'helderneto2005@gmail.com',
  isAdmin: true,
}
user

// ------------

const targetProps = ['nick', 'health'] as const
type TargetProps = (typeof targetProps)[number]

interface Player {
  nick: string
  health: number
  shield?: number
  inventory?: string[]
}

type ReversePlayer = Partial<Pick<Player, TargetProps>> &
  Required<Omit<Player, TargetProps>>

const reversePlayer: ReversePlayer = {
  inventory: ['Rock'],
  shield: 100,
  nick: 'Helder',
}
reversePlayer

const requiredPlayer: Required<Player> = {
  nick: 'Helder',
  health: 100,
  shield: 100,
  inventory: ['Rock'],
}
requiredPlayer

// ------------

type TargetRequestProps = 'body' | 'method'
type CustomRequestInit = Omit<RequestInit, TargetRequestProps> &
  Required<Pick<RequestInit, TargetRequestProps>>

function myFetch(url: string, options?: CustomRequestInit) {
  url
  options
}

myFetch('http://127.0.0.1:8080/auth', { body: '', method: 'POST' })
