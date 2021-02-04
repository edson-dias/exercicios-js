const soma = function(x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(3, 4)

imprimirResultado(3, 4, soma)

imprimirResultado(3, 4, function(x, y){
    return x -y
})

imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function(){      // função anônima dentro de objeto
        console.log('Opa')
    },

    ouvir(){                // novo jeito de declarar função anônima dentro de objeto
        console.log('Ouvindo')
    }
}