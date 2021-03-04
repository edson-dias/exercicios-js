function ValorConvenio(idade){
    const taxaGeral = 100
    if (idade < 10) {
        return (taxaGeral + 80)
    }
    else if (10 <= idade && idade <= 30){
        return (taxaGeral + 50)
    }
    else if (30 < idade && idade <= 60){
        return (taxaGeral + 95)
    }
    else if (60 < idade){
        return (taxaGeral + 130)
    }
}

a = ValorConvenio(62)
console.log(a)
