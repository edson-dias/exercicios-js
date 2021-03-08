const retornaApenasNumeros = (vetorDiverso) => {
    return vetorDiverso.filter(item => typeof item === 'number')
}

console.log(retornaApenasNumeros(['x', '2', 1, 3]))