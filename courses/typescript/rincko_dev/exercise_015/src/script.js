// Typeof

function main(arg) {
  if (typeof arg === 'string') return console.log(arg.toUpperCase())
  if (typeof arg === 'number') return console.log(arg.toFixed(2))
  if (typeof arg === 'function') return console.log(arg())
}

main('oie!')
