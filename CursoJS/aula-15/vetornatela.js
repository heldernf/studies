let valores = [9, 1, 5, 2, 6, 7]

// for(let pos=0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}