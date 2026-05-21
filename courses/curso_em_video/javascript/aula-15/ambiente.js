let num = [2, 1, 5, 9]
num.push(7)
// num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O ultimo valor do vetor é ${num[4]}`)
let pos = num.indexOf(5)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}