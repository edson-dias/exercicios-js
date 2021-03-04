function Cardapio(codigo, quantidade){
    const precos = [3, 4, 5.5, 7.5, 3.5, 2,8]
    switch (codigo){
        case 100: return quantidade * precos[0]
            break
        case 200: return quantidade * precos[1]
            break
        case 300: return quantidade * precos[2]
            break
        case 400: return quantidade * precos[3]
            break
        case 500: return quantidade * precos[4]
            break
        case 600: return quantidade * precos[5]
    }
}


console.log(`R$${Cardapio(200, 100)}`)
