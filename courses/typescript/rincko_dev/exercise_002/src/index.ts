declare global {
  interface Console {
    sayHello(): void
  }
}

Object.assign(console, { sayHello: () => console.log('Hello') })
console.sayHello()

interface UserWallet {
  coins?: number
  credits?: number
}

interface User {
  name: string
  createdAt: Date
  wallet?: UserWallet
}

interface User {
  talk(): void
}

function createUser(name: string): User {
  return {
    name,
    createdAt: new Date(),
    talk: () => console.log('Eu sou', name),
  }
}

function updateWallet(user: User, wallet: UserWallet) {
  user.wallet = { ...user.wallet, ...wallet }
}

const heldernf = createUser('Helder Neto')
updateWallet(heldernf, { coins: 5, credits: 2 })
heldernf.talk()

interface Admin extends User {
  ban(user: User): void
  kick(user: User): void
}

function promoteUser(user: User): Admin {
  return {
    ...user,
    ban(userToBan) {
      console.log(userToBan.name, 'foi banido por', this.name)
    },
    kick(userToKick) {
      console.log(userToKick.name, 'foi expulso por', this.name)
    },
  }
}

const heldernfAdmin = promoteUser({ ...heldernf, name: 'Helder Neto (Admin)' })
heldernfAdmin.kick(heldernf)
heldernfAdmin.ban(heldernf)

function adminAction(admin: Admin) {
  console.log(admin)
}
adminAction(heldernfAdmin)
