function LojaDeCarros(modelo){
    switch(modelo){
        case 'hatch': console.log('Compra efetuada!')
            break;
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes': console.log('Tem ctz?')
            break;
        default: console.log('Não trabalhamos com esse tipo.')
    }
}

a = LojaDeCarros('sedans')
a = LojaDeCarros('motorhome')
a = LojaDeCarros('hatch')
