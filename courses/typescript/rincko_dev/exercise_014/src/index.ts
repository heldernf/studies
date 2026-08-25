// Anotation, as e satisfies

interface FooterData {
  text: string
  iconURL?: string
}

type Footer = string | FooterData

const footerA: Footer = {
  text: 'Administração',
}
const footerB = {
  text: 'Administração',
} as Footer
const footerC = {
  text: 'Administração',
} satisfies Footer

console.log(footerA, footerB, footerC)

// -----------

type Cooldowns = Record<string, number>

const cooldowns = {
  heldernf: 5,
  isabeladdf: 666,
  netozmk: 200,
} satisfies Cooldowns

console.log(cooldowns.isabeladdf)

// -----------

type Properties = { filePath: string; private?: boolean }
type Commands = Record<string, Properties>

const commands = {
  ping: {
    filePath: '/ping',
    private: true,
  },
} satisfies Commands

commands.ping.filePath
