function EstoqueFrutas(fruta){
    switch (fruta){
        case 'maçã': console.log('Não vendemos essa fruta aqui!')
            break
        case 'kiwi': console.log('Estamos com escassez de kiwis')
            break
        case 'melancia': console.log('Aqui está, 3 reais o quilo')
            break
        default: console.log('Erro: Produto não cadastrado!')
    }
}


a = EstoqueFrutas('kiwi')
a = EstoqueFrutas('maçã')
a = EstoqueFrutas('melancia')
