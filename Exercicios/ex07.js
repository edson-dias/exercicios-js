function calcBhaskara(a, b, c){
    
    delta = Math.pow(b, 2) -(4 * a * c)
    
    if (delta < 0){
        return `Delta é Negativo: ${delta}`
    }
    else{
        const x1 = (-b + Math.sqrt(delta)) / (2 * a)
        const x2 = (-b - Math.sqrt(delta)) / (2 * a)           
        return [x1, x2]
    }
}

console.log(calcBhaskara(1, -5, 3))