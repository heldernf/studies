// Functions

type Args = string | number | boolean
function bootstrap(dirname: string, args: Args[] = []): [string, Args[]] {
  return [dirname, args]
}

bootstrap(import.meta.dirname, ['heldernf', 20, true])

type MainFunction = (args: string[]) => void

const main: MainFunction = (args) => {
  console.log(args)
}
main(['heldernf', '20', 'true'])

interface Functions {
  run(context: any): void
  execute(): boolean
  handle(req: Request, res: Response): void
}

const funcs: Functions = {
  run(context) {
    console.log(context)
  },
  execute() {
    return true
  },
  handle(req, res) {
    console.log(req, res)
  },
}
funcs.run('server-side')

function oldCustomLog(
  text: string,
  color: string = 'green',
  time?: Date,
  author?: string,
) {
  console.log(color, text)
  if (time) console.log('At:', time.toString())
  if (author) console.log('By:', author)
}
oldCustomLog('Hello, World!', 'red', new Date(), 'heldernf')

interface CustomLogOptions {
  color?: string
  time?: Date
  author?: string
}

function customLog(text: string, options: CustomLogOptions = {}) {
  const { color = 'green', time, author } = options
  console.log(color, text)
  if (time) console.log('At:', time.toString())
  if (author) console.log('By:', author)
}

customLog('Hello, World!', {
  color: 'red',
  time: new Date(),
  author: 'heldernf',
})
