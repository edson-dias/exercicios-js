function funcaoAleatoria(numero) {
    const aleatorio = Math.floor(Math.random() * 11)
    return (numero === aleatorio ? `Parabéns! O número sorteado foi o ${numeroAleatorio}` : `Que pena, o número sorteado foi o ${numeroAleatorio}`)
    }

