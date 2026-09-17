// declare

import { ChatInputCommandInteraction, Client } from 'discord.js'

declare var heldernf: string
// console.log(heldernf) // error: undefined

// ------------

declare global {
  const hnfVersion: string
}

Object.assign(globalThis, { hnfVersion: '1.0.0' })
console.log(hnfVersion)

// ------------

interface UserData {
  id: number
  name: string
  age: number
}

class User {
  declare id: number
  declare name: string
  declare age: number
  constructor(data: UserData) {
    Object.assign(this, data)
  }
}

const user: User = new User({ id: 1, name: 'Helder', age: 20 })
console.log(user.name)

// ------------

console.log(process.env.PORT)

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string
    }
  }
}

console.log(process.env.PORT) // auto complete on

// ------------

declare module 'discord.js' {
  interface ChatInputCommandInteraction {
    customSend(message: string): void
  }
}

function handler(interaction: ChatInputCommandInteraction) {
  interaction.customSend('Hello world.')
}

function mainModule(client: Client) {
  client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return

    interaction.customSend = function (message) {
      this.reply({ content: `> ${message}` })
    }

    handler(interaction)
  })
}

mainModule
