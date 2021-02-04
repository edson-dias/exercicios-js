function caracterizacaoTriangulos(l1, l2, l3){
    if(l1 === l2 && l1 === l3){
        console.log('Equilátero')
    }
    else if(l1 === l2 || l1 === l3 || l2 === l3 ){
        console.log('Isósceles')
    }
    else{
        console.log('Escaleno')
    }
}

caracterizacaoTriangulos(10, 10, 10)
caracterizacaoTriangulos(10, 1, 10)
caracterizacaoTriangulos(10, 10, 1)
caracterizacaoTriangulos(1, 10, 10)
caracterizacaoTriangulos(1, 2, 3)