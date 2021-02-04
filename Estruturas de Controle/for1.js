for(let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8]

for(let i = 0; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`)
}

for (i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva'
}

for (atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}