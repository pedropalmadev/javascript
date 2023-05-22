let v = [1,4,5,8,2,9] 

/*
for(let pos=0; pos < v.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${v[pos]}`)
}
*/

// Simplificado abaixo 

for(let pos in v) {
    console.log(`A posição ${pos} tem o valor ${v[pos]}`)
}