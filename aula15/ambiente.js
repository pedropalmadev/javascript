let num = [5,8,4]

num[3] = 6
num.push(1)
num.length
num.sort()

console.log(`${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}