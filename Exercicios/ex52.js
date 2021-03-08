function retornaObjetoSemParametroDesejado (objeto, parametro) {
    
    const objetoRetorno = {...objeto}
    delete objetoRetorno[parametro]
    return objetoRetorno
}


let teste = {
    'a': 'teste1',
    'b': 'teste2',
}

console.log(retornaObjetoSemParametroDesejado(teste, 'a'))